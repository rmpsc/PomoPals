import React, { useContext, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Stack, XStack, YStack, Text, Button, Input } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { UserContext } from './UserContext';

interface SignupPageProps {navigation}

const SignupPage: React.FC<SignupPageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // access the user context
  const { setUser } = useContext(UserContext)

  async function signUpHandler() {
    if (!email || !password || !firstName || !lastName) {
      console.log("Make sure to fill in all fields");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          // snake case is a common convention for sql
          first_name: firstName,
          last_name: lastName
        },
      },
    })
    if (error) {
        console.log('Error signing up:', error.message)
        console.log('email: ' + email)
        console.log('password: ' + password)
        console.log('firstName: ' + firstName)
        console.log('lastName: ' + lastName)
    } else {
      console.log('Sign up successful!', data.user.user_metadata)
      // save current user into userContext
      const currentUser = {
        first_name: data.user.user_metadata.first_name,
        last_name: data.user.user_metadata.last_name,
      };

      setUser(currentUser)
      navigation.navigate('Homepage')
    }
  }

  return (
    <Stack theme="light" paddingHorizontal={25}>
      <Text paddingVertical={30} c='$black' fontSize={'$1'} fontWeight={'$6'}>Your journey starts soon!</Text>
      <Text paddingBottom={10} c='$grey' fontSize={'$2'}>Sign Up</Text>
      <Input
        size='$2'
        placeholder={'Email'}
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        size='$2'
        placeholder={'Password'}
        onChangeText={(e) => setPassword(e)}
      />
      <Text paddingBottom={10} c='$grey' fontSize={'$2'}>First name</Text>
      <Input
        size='$2'
        onChangeText={(e) => setFirstName(e)}
      />
      <Text paddingBottom={10} c='$grey' fontSize={'$2'}>Last name</Text>
      <Input
        size='$2'
        onChangeText={(e) => setLastName(e)}
      />
      <Button size='$2' onPress={signUpHandler}>Go</Button>
      <XStack padding={10}>
        <Text c='$grey' fontSize={'$2'}>Already have an account?</Text>
        <Button onPress={() => navigation.navigate('LoginPage')}>Sign In</Button>
      </XStack>
    </Stack>
  );
};

export default SignupPage;
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
    <Stack theme="light" paddingHorizontal={25} paddingVertical={20} f={1} fd={'column'}>
      <YStack pb={50}>
        <Text paddingVertical={5} color='black' fontSize={'$1'} fontWeight={'$1'}>
          Let's get you started.
        </Text>
      </YStack>

      <YStack>
        <Input
          p={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          br={20}
          placeholder={'First name'}
          onChangeText={(e) => setFirstName(e)}
        />
        <Input
          p={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          br={20}
          placeholder={'Last name'}
          onChangeText={(e) => setLastName(e)}
        />
        <Input
          p={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          br={20}
          placeholder={'Email'}
          onChangeText={(e) => setEmail(e)}
        />
        <Input
          p={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          br={20}
          placeholder={'Password'}
          onChangeText={(e) => setPassword(e)}
        />
      </YStack>

      <YStack pb={25} f={1} jc={'flex-end'}>
       <XStack p={10} jc={'center'}>
          <Text color='$grey' fontSize={'$2'}>Already have an account?</Text>
          <Button onPress={() => navigation.navigate('LoginPage')}>Sign In</Button>
        </XStack>

        <Button
          onPress={signUpHandler}>
            <Text color='$white' fontSize={'$2'} fontWeight={'$1'}>Sign Up</Text>
        </Button>
      </YStack>
    </Stack>
  );
};

export default SignupPage;
import React, { useContext, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Stack, XStack, YStack, Text, Button, Input } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { UserContext } from './UserContext';

interface LoginPageProps {navigation}

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // access the user context
  const { setUser } = useContext(UserContext)

  async function signInWithEmail() {
    if (!username || !password) {
      console.log('missing username or password');
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    })
    if (error) {
      console.log('Invalid Credentials')
    } else {
      console.log('Login successful!', data.user.user_metadata)
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
    <Stack theme="light" paddingHorizontal={25} paddingVertical={20} flex={1} flexDirection={'column'}>
      <YStack paddingBottom={50}>
        <Text paddingVertical={5} c='$black' fontSize={'$1'} fontWeight={'$1'}>
          Let's sign you in.
        </Text>
        <Text paddingVertical={5} c='$black' fontSize={'$1'} fontWeight={'$2'}>
          Welcome back.
        </Text>
        <Text paddingVertical={5} c='$black' fontSize={'$1'} fontWeight={'$2'}>
          You've been missed!
        </Text>
      </YStack>

      <YStack>
        <Input
          padding={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          borderRadius={20}
          placeholder={'Email'}
          onChangeText={(e) => setUsername(e)}
        />
        <Input
          padding={30}
          marginVertical={10}
          size='$2'
          borderWidth={2}
          borderRadius={20}
          placeholder={'Password'}
          onChangeText={(e) => setPassword(e)}
        />
      </YStack>

      <YStack paddingBottom={25} flex={1} justifyContent={'flex-end'} alignItems={'center'}>
        <XStack padding={10}>
          <Text c='$grey' fontSize={'$2'}>Don't have an account?</Text>
          <Button onPress={() => navigation.navigate('SignupPage')}>
            <Text c='$blue10' fontSize={'$2'}>Sign Up</Text>
          </Button>
        </XStack>

        <Button
          size={50}
          marginBottom={10}
          backgroundColor={'$gray9'}
          shadowColor={'$black'}
          shadowRadius={2}
          shadowOpacity={.1}
          onPress={signInWithEmail}>
            <Text c='$white' fontSize={'$2'} fontWeight={'$1'}>Sign In</Text>
        </Button>
      </YStack>
    </Stack>
  );
};

export default LoginPage;
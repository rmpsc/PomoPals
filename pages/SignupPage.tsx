import React, { useContext, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Button, Stack, Text, XStack, YStack } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { storeRefreshToken, storeAccessToken, handleLoginAndSignUp } from '../services/AuthenticationServices';
import { UserContext } from './UserContext';

interface SignupPageProps {navigation}

const SignupPage: React.FC<SignupPageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk', {
    auth: {
      persistSession: true,
      storage: AsyncStorage
    }
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // access the user context
  const { setUser } = useContext(UserContext)

  return (
    <Stack bg="white" theme="light" paddingHorizontal={25} paddingTop={60} paddingBottom={20} f={1} fd={'column'}>
      <YStack pb={50}>
        <Header title="Let's get you started." weight="$1"/>
      </YStack>

      <YStack f={1} jc="space-around">
        <LoginForm placeholder="First name" onChangeText={setFirstName}/>
        <LoginForm placeholder="Last name" onChangeText={setLastName}/>
        <LoginForm placeholder="Email" onChangeText={setEmail}/>
        <LoginForm placeholder="Password" onChangeText={setPassword} secureTextEntry={true}/>
      </YStack>

      <YStack pb={25} f={1} jc={'flex-end'}>
       <XStack p={10} jc={'center'} ai="center">
          <Text paddingRight={10} color="gray" fontSize={'$2'}>Already have an account?</Text>
            <Text onPress={() => navigation.navigate('LoginPage')} color="$blue10" fontSize={18}>Sign In</Text>
        </XStack>

        <YStack theme="blue_active_Button" opacity={1}>
          <Button size="$6" onPress={() => handleLoginAndSignUp(true, setUser, navigation, email, password, firstName, lastName)}>
            <Text color="white" fontSize={'$2'} fontWeight={'$1'}>Sign Up</Text>
          </Button>
        </YStack>
      </YStack>
    </Stack>
  );
};

export default SignupPage;
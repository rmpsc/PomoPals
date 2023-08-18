import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Stack, XStack, YStack, Text, Button, Theme, ListItem, SizeTokens, Input } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

interface SignupPageProps {navigation}

const SignupPage: React.FC<SignupPageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signInWithEmail() {
    if (!username || !password) {
      console.log('missing username or password');
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: username,
      password: password,
    })
    if (error) {
        console.log('Email is already associated with an account')
    } else {
      console.log('Sign up successful!')
      console.log(data.user.email)
      navigation.navigate('Homepage')
    }
  }

  return (
    <Stack theme="light" paddingHorizontal={25}>
      <Text paddingVertical={30} c='$black' fontSize={'$1'} fontWeight={'$6'}>Your journey starts soon!</Text>
      <Text paddingBottom={10} c='$grey' fontSize={'$2'}>Sign Up</Text>
      <Input
        size='$2'
        placeholder={'Username'}
        onChangeText={(e) => setUsername(e)}
      />
      <Input
        size='$2'
        placeholder={'Password'}
        onChangeText={(e) => setPassword(e)}
      />
      <Button size='$2' onPress={signInWithEmail}>Go</Button>
    </Stack>
  );
};

export default SignupPage;
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function signUpHandler() {
    if (!email || !password || !firstName || !lastName) {
      console.log("Make sure to fill in all fields");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: email,
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
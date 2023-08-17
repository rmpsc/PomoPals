import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Stack, XStack, YStack, Text, Button, Theme, ListItem, SizeTokens, Input } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

interface LoginPageProps {navigation}

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    })
    if (error) {
        console.log('Invalid Credentials')
    }
  }

  return (
    <Stack theme="light" paddingHorizontal={25}>
      <Stack paddingVertical={30}>
        <Text c='$black' fontSize={'$1'} fontWeight={'$6'}>
          Welcome!
        </Text>
      </Stack>
      <Stack paddingBottom={10}>
        <Text c='$grey' fontSize={'$2'}>
          Login
        </Text>
      </Stack>
      {/* <InputDemo size="$2" /> */}
      <Input
        size='$2'
        placeholder={'Username'}
        onChangeText={(e) => {
            setUsername(e)
        }}
        />
      <Input size='$2' placeholder={'Password'} onChangeText={(e) => {
            setPassword(e)
        }}/>
        <Button size='$2' onPress={signInWithEmail}>Go</Button>
    </Stack>
  );
};

function InputDemo(props: { size: SizeTokens }) {
    return (
    <XStack alignItems="center" space="$2">
        <Input flex={1} size={props.size} placeholder={`Size ${props.size}...`} />
        <Button size={props.size}>Go</Button>
    </XStack>
    )
}
export default LoginPage;
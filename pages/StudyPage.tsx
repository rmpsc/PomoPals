import React, { useContext, useEffect, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Button, ListItem, Stack, Text, XStack, YStack } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { UserContext } from './UserContext';
import TopBar from '../components/TopBar';
import FocusButton from '../components/FocusButton';

interface StudyPageProps {token, navigation}

const StudyPage: React.FC<StudyPageProps> = ({token, navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk', {
    auth: {
      persistSession: true,
      storage: AsyncStorage
    }
  });
  
  const [countries, setCountries] = useState([]);
  const [buttonColor, setButtonColor] = useState('white');

  const user = useContext(UserContext);
  
  useEffect(() => {
    getCountries();
  }, [])

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
      <Stack f={1} bg="white" paddingHorizontal={25} paddingTop={20} paddingBottom={20}>
        <Stack paddingVertical={30}>
          <TopBar firstName={user?.user.first_name} navigation={navigation}/>
        </Stack>
        <Stack pb={10}>
          <Text color='black' fontSize={25} fontWeight={'$6'}>
            Focus
          </Text>
        </Stack>

        <XStack theme="light" jc='space-evenly'>
          <FocusButton text='Solo' page='PomodoroSolo' navigation={navigation}/>
          <FocusButton text='Group' page='PomodoroGroup' navigation={navigation}/>
        </XStack>

        <YStack>
          <ListItem>
            {countries.map((country) => (
              <Text key={country.name}>{country.name}</Text>
            ))}
          </ListItem>
        </YStack>
      </Stack>
  );
};

export default StudyPage;
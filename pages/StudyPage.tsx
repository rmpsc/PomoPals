import React, { useContext, useEffect, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Button, ListItem, Stack, Text, YStack } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { UserContext } from './UserContext';

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
      <Stack f={1} bg="white" paddingHorizontal={25} paddingTop={60} paddingBottom={20}>
        <Stack paddingVertical={30}>
          <Text color='black' fontSize={'$1'} fontWeight={'$6'}>
            Welcome back, {user?.user.first_name}
          </Text>
        </Stack>
        <Stack pb={10}>
          <Text color='$grey' fontSize={'$2'}>
            How would you like to study today?
          </Text>
        </Stack>

        <Stack theme="light">
          <Button
            size={90}
            mb={10}
            bg={buttonColor}
            shadowColor={'black'}
            shadowRadius={2}
            shadowOpacity={.1}
            onPress={() =>
              navigation.navigate('PomodoroSolo')
            }
          >
            <Text color='black' fontSize={'$2'}>Study solo</Text>
          </Button>
          <Button
            size={90}
            mb={10}
            bg={buttonColor}
            shadowColor={'black'}
            shadowRadius={2}
            shadowOpacity={.1}
            onPress={() =>
              navigation.navigate('PomodoroGroup')
            }
          >
            <Text color='black' fontSize={'$2'}>Study in a group</Text>
          </Button>
        </Stack>
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
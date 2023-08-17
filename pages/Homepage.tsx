import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { Stack, XStack, YStack, Text, Button, Theme, ListItem } from 'tamagui';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

interface HomepageProps {navigation}

const Homepage: React.FC<HomepageProps> = ({navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk');
  
  const [countries, setCountries] = useState([]);
  const [buttonColor, setButtonColor] = useState('white');
  
  useEffect(() => {
    getCountries();
  }, [])

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <Stack paddingHorizontal={25}>
      <Stack paddingVertical={30}>
        <Text c='$black' fontSize={'$1'} fontWeight={'$6'}>
          Welcome back, Romel
        </Text>
      </Stack>
      <Stack paddingBottom={10}>
        <Text c='$grey' fontSize={'$2'}>
          How would you like to study today?
        </Text>
      </Stack>

      <Stack theme="light">
        <Button
          size={90}
          marginBottom={10}
          backgroundColor={buttonColor}
          shadowColor={'$black'}
          shadowRadius={2}
          shadowOpacity={.1}
          onPress={() =>
            navigation.navigate('PomodoroSolo')
          }
        >
          <Text c='$black' fontSize={'$2'}>Study solo</Text>
        </Button>
        <Button
          size={90}
          marginBottom={10}
          backgroundColor={buttonColor}
          shadowColor={'$black'}
          shadowRadius={2}
          shadowOpacity={.1}
          onPress={() =>
            navigation.navigate('PomodoroGroup')
          }
        >
          <Text c='$black' fontSize={'$2'}>Study in a group</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1AB787',
  },
  buttonContainer: {
    // Define your styles here
  },
});

export default Homepage;
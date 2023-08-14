import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Button, Theme } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface HomepageProps {navigation}

const Homepage: React.FC<HomepageProps> = ({navigation}) => {
  const [buttonColor, setButtonColor] = useState('$tomato');
  
  return (
    <Stack paddingHorizontal={25}>
      <Stack paddingVertical={50}>
        <Text c='$black' fontSize={'$1'} fontWeight={'$6'}>
          Welcome back, Romel
        </Text>
      </Stack>
      <Stack paddingBottom={10}>
        <Text c='$grey' fontSize={'$2'}>
          How would you like to study today?
        </Text>
      </Stack>

      <Stack>
        <Button
          size={90}
          marginBottom={10}
          backgroundColor={buttonColor}
          onPressIn={() => setButtonColor('$tomato')}
          onPress={() =>
            navigation.navigate('PomodoroSolo')
          }
        >
          <Text c='$black' fontSize={'$2'}>Solo</Text>
        </Button>
        <Button
          size={90}
          marginBottom={10}
          backgroundColor={buttonColor}
          onPress={() =>
            navigation.navigate('PomodoroGroup')
          }
        >
          <Text c='$black' fontSize={'$2'}>Group</Text>
        </Button>
      </Stack>
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
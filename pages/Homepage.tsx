import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Button, Theme } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface HomepageProps {navigation}

const Homepage: React.FC<HomepageProps> = ({navigation}) => {
  return (
    <Stack ai='center'>
      <Stack>
        <Text color='$tomato' fontSize={'$1'}>
          How would you like to study today?
        </Text>
      </Stack>

      <Theme name='light_red'>
        <Stack style={styles.buttonContainer} fd='row' jc='space-between'>
          <Button
            size={60}
            onPress={() =>
              navigation.navigate('PomodoroSolo')
            }
          >
            Solo
          </Button>
          <Button
            size={60}
            onPress={() =>
              navigation.navigate('PomodoroGroup')
            }
          >
            Group
          </Button>
        </Stack>
      </Theme>
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
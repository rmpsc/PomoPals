import { StyleSheet } from 'react-native';
import { Stack, Text, Button, Theme } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

export default function Homepage() {
  return (
    <Stack ai='center'>
      <Stack>
        <Text color='$tomato' fontSize={'$1'}>PomoPals</Text>
      </Stack>
      
      <Text color='$darkPurple'>How would you like to study today?</Text>
      <Theme name='light_red'>
      <Stack style={styles.buttonContainer} fd='row' jc='space-between'>
        <Button size={60}>Solo</Button>
        <Button size={60}>Group</Button>
      </Stack>
      </Theme>

    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1AB787'
  }
});

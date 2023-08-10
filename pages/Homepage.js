import { StyleSheet } from 'react-native';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

export default function Homepage() {
  return (
    <Stack ai='center'>
      <Text color='$tomato' fontSize={'$1'}>PomoPals</Text>
      <Text color='$darkPurple'>How would you like to study today?</Text>
      <Stack style={styles.buttonContainer} fd='row' jc='space-between'>
        <Button style={styles.button}>Solo</Button>
        <Button style={styles.button}>Group</Button>
      </Stack>
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

import { StyleSheet } from 'react-native';
import { Stack, Text, Button, getTokens } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

export default function Homepage() {
  return (
    <Stack style={styles.container}>
      <Text style={styles.title}>PomoPals</Text>
      <Text style={styles.subtitle}>How would you like to study today?</Text>
      <Stack style={styles.buttonContainer}>
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
  title: {
    fontSize: getTokens().size.small,
    color: '#000000'
  },
  subtitle: {
    color: '#000000'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1AB787'
  }
});

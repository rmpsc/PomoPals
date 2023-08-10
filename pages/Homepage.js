import { StyleSheet, Text, View, } from 'react-native';
import { Button } from 'tamagui';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PomoPals</Text>
      <Text>How would you like to study today?</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>Solo</Button>
        <Button style={styles.button}>Group</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1AB787'
  }
});

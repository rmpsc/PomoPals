import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './pages/Homepage';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Homepage></Homepage>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

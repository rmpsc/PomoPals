import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Homepage from './pages/Homepage';
import { TamaguiProvider, Stack } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Stack style={styles.container}>
        <Homepage></Homepage>
        <StatusBar style="auto" />
      </Stack>
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

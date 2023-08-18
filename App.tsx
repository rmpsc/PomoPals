import React from 'react';
import { StyleSheet } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './pages/Homepage';
import PomodoroSolo from './pages/PomodoroSolo';
import PomodoroGroup from './pages/PomodoroGroup';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const Stacks = createNativeStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stacks.Navigator>
          <Stacks.Screen
            name='LoginPage'
            component={LoginPage}
            options={{ title: 'Login' }}
          />
          <Stacks.Screen
            name='SignupPage'
            component={SignupPage}
            options={{ title: 'Sign Up' }}
          />
          <Stacks.Screen
            name='Homepage'
            component={Homepage}
            options={{ title: 'PomoPals' }}
          />
          <Stacks.Screen
            name='PomodoroSolo'
            component={PomodoroSolo}
            options={{ title: 'Solo Pomodoro' }}
          />
          <Stacks.Screen
            name='PomodoroGroup'
            component={PomodoroGroup}
            options={{ title: 'Group Pomodoro' }}
          />
        </Stacks.Navigator>
      </NavigationContainer>
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

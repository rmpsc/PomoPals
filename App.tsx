import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TamaguiProvider } from 'tamagui';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PomodoroGroup from './pages/PomodoroGroup';
import PomodoroSolo from './pages/PomodoroSolo';
import SignupPage from './pages/SignupPage';
import { UserContextProvider } from './pages/UserContext';
import config from './tamagui.config';

const Stacks = createNativeStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stacks.Navigator>
          <Stacks.Screen
            name='SignupPage'
            component={SignupPage}
            options={{ title: 'Sign Up' }}
          />
          <Stacks.Screen
            name='LoginPage'
            component={LoginPage}
            options={{ title: 'Login' }}
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
    </UserContextProvider>
  );
}

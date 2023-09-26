import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { TamaguiProvider } from 'tamagui';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PomodoroGroup from './pages/PomodoroGroup';
import PomodoroSolo from './pages/PomodoroSolo';
import SignupPage from './pages/SignupPage';
import { UserContextProvider } from './pages/UserContext';
import config from './tamagui.config';
import { getUserToken } from './services/AuthenticationServices';
import { ActivityIndicator } from 'react-native';

const Stacks = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('SignupPage');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserToken = async () => {
      const token = await getUserToken();
      if (token) {
        console.log('Retrieved token successfully:', token);
        setInitialRoute('Homepage');
      }
      setIsLoading(false);
    };
    checkUserToken();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color="#00ff00" />
    )
  }

  return (
    <UserContextProvider>
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stacks.Navigator initialRouteName={initialRoute}>
          <Stacks.Screen
            name='LoginPage'
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stacks.Screen
            name='SignupPage'
            component={SignupPage}
            options={{headerShown: false}}
          />
          <Stacks.Screen
            name='Homepage'
            component={Homepage}
            options={{headerShown: false}}
          />
          <Stacks.Screen
            name='PomodoroSolo'
            component={PomodoroSolo}
            options={{headerShown: false}}
          />
          <Stacks.Screen
            name='PomodoroGroup'
            component={PomodoroGroup}
            options={{headerShown: false}}
          />
        </Stacks.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
    </UserContextProvider>
  );
}

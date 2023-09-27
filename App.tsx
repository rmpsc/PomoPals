import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react';
import { Stack, TamaguiProvider } from 'tamagui';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PomodoroGroup from './pages/PomodoroGroup';
import PomodoroSolo from './pages/PomodoroSolo';
import SignupPage from './pages/SignupPage';
import { UserContextProvider } from './pages/UserContext';
import config from './tamagui.config';
import { getUserToken, removeUserToken } from './services/AuthenticationServices';
import { ActivityIndicator } from 'react-native';

const Stacks = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('SignupPage');
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = await getUserToken();
      if (userToken) {
        console.log('Retrieved token successfully:', userToken);
        console.log(typeof userToken);
        // for log out testing
        removeUserToken();
        setInitialRoute('Homepage');
        setToken(userToken);
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
            options={{headerShown: false}}
          >
            {(props) => <Homepage {...props} token={token} />}
          </Stacks.Screen>
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

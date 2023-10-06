import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { TamaguiProvider, YStack } from 'tamagui';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PomodoroGroup from './pages/PomodoroGroup';
import PomodoroSolo from './pages/PomodoroSolo';
import SignupPage from './pages/SignupPage';
import { UserContextProvider } from './pages/UserContext';
import { getAccessToken } from './services/AuthenticationServices';
import config from './tamagui.config';
import SettingsPage from './pages/SettingsPage';

const Stacks = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('SignupPage');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = await getAccessToken();
      if (userToken) {
        console.log('Retrieved access token from AsyncStorage:', userToken.substring(0, 9));
        setInitialRoute('Homepage');
        console.log('Set initial route to Homepage')

        // TEMPORARY TESTING
        // await removeAccessToken();
        // await removeRefreshToken();
      }
      setIsLoading(false);
    };
    checkUserToken();
  }, []);

  if (isLoading) {
    return (
      <TamaguiProvider config={config}>
        <YStack f={1} ai='center' jc='center'>
          <ActivityIndicator color={'black'} />
        </YStack>
      </TamaguiProvider>
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
            {(props) => <Homepage {...props} />}
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
          <Stacks.Screen
            name='Settings'
            component={SettingsPage}
          />
        </Stacks.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
    </UserContextProvider>
  );
}

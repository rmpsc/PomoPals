import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider } from 'tamagui';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PomodoroGroup from './pages/PomodoroGroup';
import PomodoroSolo from './pages/PomodoroSolo';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import SplashScreen from './pages/SplashScreen';
import { UserContextProvider } from './pages/UserContext';
import { getAccessToken, removeAccessToken, removeRefreshToken } from './services/AuthenticationServices';
import config from './tamagui.config';
import { useFonts } from 'expo-font';

const Stacks = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState('SignupPage');
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, fontError] = useFonts({
    'WorkSans-Black': require('./assets/fonts/WorkSans-Black.ttf'),
    'SF-Pro-Display-Black': require('./assets/fonts/SF-Pro-Display-Black.otf'),
    'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'WorkSans-Var': require('./assets/fonts/WorkSans-Var.ttf'),
  });

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

  if (isLoading && !fontsLoaded && !fontError) {
    return (
      <TamaguiProvider config={config}>
        <SplashScreen></SplashScreen>
      </TamaguiProvider>
    )
  }

  return (
    <UserContextProvider>
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <StatusBar style='dark'/>
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
            options={{headerShown: true}}
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

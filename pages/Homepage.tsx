import React, { useContext, useEffect, useState } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-url-polyfill/auto';
import { updateCurrentUser } from '../services/AuthenticationServices';
import HabitTrackerPage from './HabitTrackerPage';
import PalsPage from './PalsPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import SplashScreen from './SplashScreen';
import StudyPage from './StudyPage';
import { UserContext } from './UserContext';

const Tab = createBottomTabNavigator();

interface HomepageProps {navigation}

const Homepage: React.FC<HomepageProps> = ({navigation}) => {

  const { setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true);

  const updateLoadingOnUserUpdate = async () => {
    const didUpdateUserSuccessfully = await updateCurrentUser(setUser);
    if (didUpdateUserSuccessfully) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }
  
  useEffect(() => {
    updateLoadingOnUserUpdate();
  }, []);

  if (isLoading) {
    return (
      <SplashScreen></SplashScreen>
    )
  }

  return (
    <Tab.Navigator initialRouteName='Focus'>
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-person-circle" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Track"
        component={HabitTrackerPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-analytics-sharp" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Focus"
        component={StudyPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-timer-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Pals"
        component={PalsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-people-circle-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-ellipsis-horizontal-sharp" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Homepage;
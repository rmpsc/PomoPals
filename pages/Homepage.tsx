import React, { useState, useContext, useEffect } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createClient } from '@supabase/supabase-js';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import StudyPage from './StudyPage';
import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';
import HabitTrackerPage from './HabitTrackerPage';
import PalsPage from './PalsPage';
import SettingsPage from './SettingsPage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';
import { YStack } from 'tamagui';
import { getRefreshToken, getAccessToken, updateCurrentUser } from '../services/AuthenticationServices';

const Tab = createBottomTabNavigator();

interface HomepageProps {token, navigation}

const Homepage: React.FC<HomepageProps> = ({token, navigation}) => {

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
      <YStack f={1} ai='center' jc='center'>
        <ActivityIndicator color={'black'} />
      </YStack>
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
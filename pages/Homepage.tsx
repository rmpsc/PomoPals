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

const Tab = createBottomTabNavigator();

interface HomepageProps {token, navigation}

const Homepage: React.FC<HomepageProps> = ({token, navigation}) => {
  /* takes in project url and anon key */
  const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk', {
    auth: {
      persistSession: true,
      storage: AsyncStorage
    }
  });

  const { setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true);

  const updateCurrentUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser(token)
    console.log("Attempting to update current user with token:", token.substring(0, 9))
    console.log('user:', user)
    if (error) {
      console.log("Error updating current user:", error)
    } else {
      const currentUser = {
        first_name: user.user_metadata.first_name,
        last_name: user.user_metadata.last_name,
      }
      setUser(currentUser)
      console.log("Updated current user:", currentUser.first_name, currentUser.last_name)
      setIsLoading(false)
      console.log("Loading completed")
    }
  }
  
  useEffect(() => {
    updateCurrentUser();
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
import React, { useContext, useEffect } from 'react';
/* https://tamagui.dev/docs/core/stack-and-text  */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createClient } from '@supabase/supabase-js';
/* polyfill needed for supabase integration https://github.com/supabase/supabase/issues/8464 */
import 'react-native-url-polyfill/auto';
import PomodoroGroup from './PomodoroGroup';
import PomodoroSolo from './PomodoroSolo';
import StudyPage from './StudyPage';
import { UserContext } from './UserContext';
import ProfilePage from './ProfilePage';
import HabitTrackerPage from './HabitTrackerPage';
import PalsPage from './PalsPage';
import SettingsPage from './SettingsPage';
import Ionicons from '@expo/vector-icons/Ionicons';

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

  const updateCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser(token)
    console.log('user:', user)
    const currentUser = {
      first_name: user.user_metadata.first_name,
      last_name: user.user_metadata.last_name,
    };
    console.log(user.user_metadata.first_name)
    console.log(user.user_metadata.last_name)
    setUser(currentUser)
  }
  
  useEffect(() => {
    updateCurrentUser();
  }, []);

  return (
    <Tab.Navigator initialRouteName='Study'>
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
        name="Study"
        component={StudyPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-timer-sharp" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Pals"
        component={PalsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-paw" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="md-settings" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Homepage;
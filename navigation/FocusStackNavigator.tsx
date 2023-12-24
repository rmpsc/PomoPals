import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudyPage from '../pages/StudyPage';
import PomodoroSolo from '../pages/PomodoroSolo';
import PomodoroGroup from '../pages/PomodoroGroup';

const Stack = createNativeStackNavigator();

const FocusStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StudyPage" component={StudyPage} options={{headerShown: false}}/>
      <Stack.Screen name="PomodoroSolo" component={PomodoroSolo} options={{headerShown: false}}/>
      <Stack.Screen name="PomodoroGroup" component={PomodoroGroup} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default FocusStackNavigator;

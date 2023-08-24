import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TaskView from './TaskView';
import TaskDetail from './TaskDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Task View" component={TaskView} />
      <Stack.Screen name="Task Detail" component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
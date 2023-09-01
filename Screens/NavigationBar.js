import React from "react";
import {View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons//FontAwesome";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";

import TaskView from './TaskView'
import CalendarView from './CalendarView';
import AddTask from "./AddTask";
import TaskDetail from "./TaskDetail";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const setNavigationBarColor = () => {
  return {
    tabBarStyle: {
      backgroundColor: "#575959",
    },
  };
};
const NavigationBar= ()=>{
  return(

    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={setNavigationBarColor}>
        <Tab.Screen
          name="Task View"
          backgroundColor="#2f4f4f"
          component={TaskView}
          options={{
            header: ()=> null,
            tabBarLabel: 'Task View',
            tabBarIcon: ({ color, size }) => (
              <Icon name="tasks" size={size} color={color} />
            ),

          }}
        />
        <Tab.Screen
          name="Calendar View"
          backgroundColor="#2f4f4f"
          component={CalendarView}
          options={{
            header: ()=> null,
            tabBarLabel: 'Calendar View',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" size={size} color={color} />
            ),

          }}
        />
        <Tab.Screen
          name="Add Task"
          backgroundColor="#2f4f4f"
          component={AddTask}
          options={{
            header: ()=> null,
            tabBarLabel: 'Add Task',
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus" size={size} color={color} />
            ),

          }}
        />
      <Stack.Screen name="TaskDetail" component={TaskDetail} options={{
              tabBarButton: () => null, 
            }}/>
      </Tab.Navigator>

    </NavigationContainer>
    </View>

  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:'center'
  },
  headertitle:{
    height: '10%',
    backgroundColor:'#78797a',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  arrange:{
    flexDirection:"row",
    justifyContent:'space-between'
  },
  font:{
    color: 'white',
    fontSize: 25,
    left:'20%',
  },
  buttonView:{
    justifyContent:'center',
    alignItems:'center',
    right:'10%',
  },
})

export default NavigationBar
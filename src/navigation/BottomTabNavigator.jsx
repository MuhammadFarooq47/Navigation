// ./navigation/TabNavigator.js

import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import About from "../screens/About";

import MainStackNavigator from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: '#2E86C1',
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerStatusBarHeight: 30,
        // tabBarIcon: ({color, size}) => (
        //   <Icon name="notifications" color={'red'} size={size} />
        // ),
        tabBarButton: props => <TouchableOpacity {...props} />,
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      // options={{
      //   tabBarIcon: ({color, size}) => (
      //     <Icon name="settings" color={color} size={size} />
      //   ),
      // }}
    />
  </Tab.Navigator>
  );
};

export default BottomTabNavigator;
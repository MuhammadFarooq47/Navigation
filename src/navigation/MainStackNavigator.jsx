import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AppDrawer">
    {/* <Stack.Screen
       name="Login"
       component={Login}
       options={{headerShown: false}}
     /> */}
     <Stack.Screen
       name="AppDrawer"
       component={DrawerNavigator}
       options={{headerShown: false}}
     />
   </Stack.Navigator>
  );
}

export default MainStackNavigator;
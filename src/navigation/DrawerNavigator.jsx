import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import Contact from "../screens/Contact";

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator backBehavior="history" initialRouteName="BottomTab">
        <Drawer.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    )
   
};

export default DrawerNavigator;
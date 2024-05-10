// ./screens/About.js
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return (
  <NavigationContainer>
  <MainStackNavigator />  
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default App;
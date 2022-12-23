import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Imports from screens
import { HomeScreen } from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

export { HomeStackNavigation }
// Imports from reat (react-native and react-navigation)
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Imports from screens
import { RootNavigation } from "./index";

// Imports from components

// Imports from styles


// Create a stack navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}

import { View } from "react-native";
import { HomeStackNavigation } from "./HomeNavigation";
import { LoginScreen } from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "../../theme";


// Create a stack navigator
const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const SignIn = false;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerTitleStyle: {
          color: theme.colors.secundary,
          fontSize: 13,
        },
        headerTitleAlign: 'center',
      }}
    >
      {!SignIn ? <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> :
        <Stack.Screen 
          name="Home" 
          component={HomeStackNavigation}
          
        />
        
        }
    </Stack.Navigator>
  )
}

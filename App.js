import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup, Login, Home} from "./screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
      >
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importin components
import { Home } from './src/Screens/Home';
import { UpdateEmployee } from './src/Screens/UpdateEmployee';



const Stack = createNativeStackNavigator();

const defaultTheme = {
  ...DefaultTheme,
  // dark: false,
  colors: {
    card: '#823aa8',
    primary: '#823aa8',
    text: 'white',
    background: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'All Users' }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateEmployee}
          options={{ title: 'Update an employee' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

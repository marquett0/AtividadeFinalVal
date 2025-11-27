import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CalcDesconto from './src/screens/CalcDesconto';
import CarList from './src/screens/CarList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Atividade Final' }}/>

        <Stack.Screen 
          name="CalcDesconto" 
          component={CalcDesconto}
          options={{ title: 'Calculadora de Desconto' }}
        />

        <Stack.Screen 
          name="CarList" 
          component={CarList}
          options={{ title: 'Lista de Carros' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
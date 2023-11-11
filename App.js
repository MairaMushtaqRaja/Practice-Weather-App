import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';
const Stack = createStackNavigator();
const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName='Splash'>
  <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}></Stack.Screen>
  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DecksPage from './components/DecksPage';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import HomePage from './components/HomePage';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Deck" component={DecksPage} />
      <Stack.Screen name="Card" component={AddCard} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

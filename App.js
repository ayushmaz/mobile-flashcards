import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DecksPage from './components/DecksPage';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import HomePage from './components/HomePage';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Notifications"
//         onPress={() => navigation.navigate('Notifications')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="DecksPage" component={DecksPage} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store= {createStore(reducer,middleware)}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

// export default function App() {
//   return (
//     <View style = {{flex : 1}}> 
//         <HomePage />
//     </View>
//   );
// }

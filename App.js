import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View} from 'react-native';
import AboutScreen from './src/about';
import HomeScreen from './src/home';
import NotificationScreen from './src/notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/login';
import { NavigationContainer } from '@react-navigation/native';
import RegistrationScreen from './src/register';

export default function App() {
  const StackHandler=createNativeStackNavigator()

  return (
      <RegistrationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

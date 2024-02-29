import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './routes'
import { Home } from './Home'

export default function App() {
  return (
      <NavigationContainer>
        <Home/>
        <Routes/>
      </NavigationContainer>
  );
}

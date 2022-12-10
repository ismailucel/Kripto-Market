import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CoinDetaiedScreen  from './src/screens/CoinDetailedScreen';
import HomeScreen  from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  }
});

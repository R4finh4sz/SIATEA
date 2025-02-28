import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Login from './src/screens/login/login';
import LoginScreen from './src/screens/login/login';
// import icon from './src/assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d16ba',
    justifyContent: 'center',
    padding: 8,
    paddingTop: 50,
  },
});
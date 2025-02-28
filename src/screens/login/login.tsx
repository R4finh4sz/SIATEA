import React, { useState } from 'react';
import { View, TextInput, Text, Button, StatusBar } from 'react-native';

import { styles } from './styleLogin';

import { NavigationProp } from '@react-navigation/native';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleLogin = () => {
  console.log  (`Email: ${
    email
  } Password: ${
    password
  }`);}

return (
  <View style={styles.fundo}>
    
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <Button title="Login" onPress={handleLogin} />
  </View>
);
}


export default LoginScreen;
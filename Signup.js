import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Login from './App';

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <TextInput placeholder="Confirm Password" secureTextEntry />
      <TouchableOpacity onPress={() => console.log('Signup button pressed')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

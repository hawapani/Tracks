import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SigninScreen = ({navigation}) => {
  return <>
  <Text style={{ fontSize: 48 }}>SigninScreen</Text>
  <Button title='Go to Signup screen' onPress={() => navigation.navigate('Signup')}/>
  <Button title='Go to Track list screen' onPress={() => navigation.navigate('mainFlow')}/>
</>
};

const styles = StyleSheet.create({});

export default SigninScreen;

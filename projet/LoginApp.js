import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Login } from './components/Login';

export default function LoginApp() {
  return (
    <View style={[styles.container, { backgroundColor: '#301F3C' }]}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'space-around',
    maxWidth: 800,
    maxHeight: 400,
  }
});

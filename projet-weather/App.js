import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherInfo from './components/WeatherInfo';
import ChambreInfo from './components/ChambreInfo';

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: '#301F3C' }]}>
      <WeatherInfo />
      <ChambreInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'space-around',
  }
});

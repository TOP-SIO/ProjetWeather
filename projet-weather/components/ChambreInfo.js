import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ChambreInfo = () => {
  return (
    <View>
      <Text style={styles.text}>Information Chambre</Text>
      <Text style={styles.text}>Condition</Text>
      <Image style={styles.logo} source={require('../assets/sanstitre.png')} />
      <Text style={styles.text}>Température: 19°C</Text>
      <Text style={styles.text}>Humidité: 50%</Text>
      <Text style={styles.text}>Dernière mise à jour: 16:00:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    color: 'white',
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});


export default ChambreInfo;

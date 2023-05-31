import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

  const ChambreInfo = () => {
    const temperature = 10;
    const humidite = 60;
  let sourceImage = require('../assets/Sans_titre.png');

  if (temperature > 20 && humidite > 60) {
    sourceImage = require('../assets/Sans_titre_2.png');
  }

  return (
    <View>
      <Text style={styles.text}>Information Chambre</Text>
      <Text style={styles.text}>Condition</Text>
      <Image style={[styles.logo,{ alignSelf: "center", marginBottom: 10 }]} source={sourceImage} />
      <Text style={styles.text}>Température: {temperature}°C</Text>
      <Text style={styles.text}>Humidité: {humidite}%</Text>
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

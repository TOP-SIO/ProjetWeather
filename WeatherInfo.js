import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const getWeatherData = async () => {
  const apiUrl = 'https://api.open-meteo.com/v1/meteofrance?latitude=48.85&longitude=2.35&current_weather=true&timezone=Europe%2FBerlin';
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

weather_codes = {
0: 'Ciel dégagé',1: 'Ciel dégagé en général',2: 'Plutôt beau temps',3: 'Périodes dégagées prolongées',4: 'Partiellement nuageux',5: 'Nuages ​​épars',6: 'Assez nuageux',7: 'Nuageux en général',8: 'Couvert',9: '???',10: 'Brume',11: 'Brouillard au sol',12: 'Brouillard au sol',13: 'Foudre en nappe',14: 'Quelques averses',15: 'Quelques averses',16: 'Quelques averses',17: 'Orage isolé',18: 'Rafales de vent',19: 'Trombe marine',20: 'Possible bruine',21: 'Possible pluie',22: 'Possible neige',23: 'Pluie et neige légères',24: 'Légère pluie verglaçante',25: 'Légère averse de pluie',26: 'Légère averse de neige',27: 'Légère averse de granules de neige ou de pluie/neige mélangées',28: 'Possible brouillard',29: 'Orage isolé',30: 'Tempête de sable',31: 'Tempête de sable',32: 'Tempête de sable',33: 'Tempête de sable intense',34: 'Tempête de sable intense',35: 'Tempête de sable intense',36: 'Averses de neige',37: 'Fortes averses de neige',38: 'Neige tourbillonnante',39: 'Fortes chutes de neige tourbillonnante',40: 'Brouillard localisé',41: 'Brouillard localisé',42: 'Brouillard',43: 'Brouillard',44: 'Brouillard',45: 'Brouillard dense',46: 'Brouillard dense',47: 'Brouillard dense',48: 'Brouillard givrant',49: 'Brouillard givrant',50: 'Légère bruine occasionnelle',51: 'Légère bruine',52: 'Bruine occasionnelle',53: 'Bruine',54: 'Bruine occasionnelle forte',55: 'Forte bruine',56: 'Bruine verglaçante',57: 'Pluie verglaçante',58: 'Bruine et pluie',59: 'Bruine et pluie',60: 'Pluie occasionnelle',61: 'Légère pluie',62: 'Pluie occasionnelle',63: 'Pluie',64: 'Pluie occasionnelle forte',65: 'Forte pluie',66: 'Pluie verglaçante',67: 'Pluie verglaçante', 68: "Léger brouillard givrant", 69: "Fortes averses de pluie verglaçante", 70: "Léger crachin verglaçant", 71: "Forte averse de grésil", 72: "Léger grésil", 73: "Pluie verglaçante", 74: "Forte pluie verglaçante", 75: "Légère pluie verglaçante", 76: "Grains de glace", 77: "Forte intensité de grains de glace", 78: "Légère intensité de grains de glace", 79: "Poudrerie", 80: "Neige", 81: "Fortes chutes de neige", 82: "Légères chutes de neige", 83: "Orages violents et pluie", 84: "Orages légers et pluie", 85: "Orages violents et neige", 86: "Orages légers et neige", 87: "Précipitations mixtes fortes", 88: "Précipitations mixtes légères", 89: "Fortes pluies", 90: "Légères pluies", 91: "Forte pluie et neige", 92: "Légère pluie et neige", 93: "Fortes chutes de neige", 94: "Légères chutes de neige", 95: "Fortes chutes de neige avec vent", 96: "Légères chutes de neige avec vent", 97: "Fortes pluies avec vent", 98: "Légères pluies avec vent", 99: "Forte averse de grêle"
}

weather_picto = { 0: "c0000.png", 1: "c0000.png", 2: "c0000.png", 3: "c0010.png", 4: "c0010.png", 5: "c0010.png", 6: "c0023.png", 7: "c0023.png", 8: "c0043.png", 9: "ciel_non_visible.png", 10: "c0060.png", 11: "c0060.png", 12: "c0060.png", 13: "c0029.png", 14: "p0020.png", 15: "p0020.png", 16: "p0020.png", 17: "c0049.png", 18: "rafales_de_vent.png", 19: "c0030.png", 20: "p0010.png", 21: "p0020.png", 22: "x3089.png", 23: "x3064.png", 24: "x3090.png", 25: "x3050.png", 26: "x7039.png", 27: "x8969.png", 28: "c0061.png", 29: "c0049.png", 30: "tempete_de_sable.png", 31: "tempete_de_sable.png", 32: "tempete_de_sable.png", 33: "tempete_de_sable.png", 34: "tempete_de_sable.png", 35: "tempete_de_sable.png", 36: "x3089.png", 37: "p0083.png", 38: "p0083.png", 39: "p0085.png", 40: "c0061.png", 41: "c0061.png", 42: "c0061.png", 43: "c0061.png", 44: "c0061.png", 45: "c0060.png", 46: "c0060.png", 47: "c0060.png", 48: "c0069.png", 49: "c0069.png", 50: "p0010.png", 51: "p0010.png", 52: "p0010.png", 53: "p0010.png", 54: "p0010.png", 55: "p0010.png", 56: "p0090.png", 57: "p0090.png", 58: "p0020.png", 59: "p0040.png", 60: "x3050.png", 61: "p0020.png", 62: "x3060.png", 63: "p0030.png", 64: "x3070.png", 65: "p0040.png", 66: "x3090.png", 67: "p0090.png", 68: "x8039.png", 69: "p0039.png", 70: "p0089.png", 71: "p0089.png", 72: "p0083.png", 73: "p0080.png", 74: "p0085.png", 75: "p0085.png", 76: "p0080.png", 77: "p0080.png", 78: "p0080.png", 79: "p0080.png", 80: "p0050.png", 81: "p0060.png", 82: "p0070.png", 83: "x8039.png", 84: "p0064.png", 85: "x3089.png", 86: "x3089.png", 87: "x3089.png", 88: "x3969.png", 89: "x3969.png", 90: "x4969.png", 91: "c0090.png", 92: "c0090.png", 93: "c0090.png", 94: "c0090.png", 95: "c0090.png", 96: "c0090.png", 97: "c0090.png", 98: "c0090.png", 99: "x4969.png"}


const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
  const fetchData = async () => {
    const data = await getWeatherData();
    setWeatherData(data);
  };
  fetchData();
  const intervalId = setInterval(fetchData, 600000); 
  return () => clearInterval(intervalId);
}, []);
  return (
    <View style={styles.container}>
      {weatherData ? (
        <>
          <Text style={styles.text}>Météo</Text>
          <Image style={styles.logo} source={require('../assets/c0010.png')} />
          <Text style={styles.text}>Température: {weatherData.current_weather.temperature}°C</Text>
          <Text style={styles.text}>Vitesse du vent: {weatherData.current_weather.windspeed} km/h</Text>
          <Text style={styles.text}>Description météo: {weather_codes[weatherData.current_weather.weathercode]}</Text>
          <Text style={styles.text}>Dernière mise à jour: {new Date(weatherData.current_weather.time).toLocaleTimeString()}</Text>
        </>
        // <Text style={styles.text}>Code météo: {weatherData.current_weather.weathercode}</Text>
      ) : (
        <Text style={styles.text}>Chargement des données...</Text>
      )}
      {
        <>
        <Text style={styles.text}>Information Chambre</Text>
        <Text style={styles.text}>Condition</Text>
        <Text style={styles.text}>Température: 19°C</Text>
        <Text style={styles.text}>Humidité: 50%</Text>
        <Text style={styles.text}>Dernière mise à jour: 16:00:00</Text>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});


export default WeatherInfo;

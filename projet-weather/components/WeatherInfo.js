import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import c0023 from '../assets/pictogramme_weather/c0023.png';
import c0000 from '../assets/pictogramme_weather/c0000.png';
import c0010 from '../assets/pictogramme_weather/c0010.png';
import c0025 from '../assets/pictogramme_weather/c0025.png';
import c0049 from '../assets/pictogramme_weather/c0049.png';
import c0050 from '../assets/pictogramme_weather/c0050.png';
import c0053 from '../assets/pictogramme_weather/c0053.png';
import c0060 from '../assets/pictogramme_weather/c0060.png';
import c0069 from '../assets/pictogramme_weather/c0069.png';
import c0080 from '../assets/pictogramme_weather/c0080.png';
import c0089 from '../assets/pictogramme_weather/c0089.png';
import p0010 from '../assets/pictogramme_weather/p0010.png';
import p0020 from '../assets/pictogramme_weather/p0020.png';
import p0030 from '../assets/pictogramme_weather/p0030.png';
import p0039 from '../assets/pictogramme_weather/p0039.png';
import p0040 from '../assets/pictogramme_weather/p0040.png';
import p0049 from '../assets/pictogramme_weather/p0049.png';
import p0050 from '../assets/pictogramme_weather/p0050.png';
import p0069 from '../assets/pictogramme_weather/p0069.png';
import p0070 from '../assets/pictogramme_weather/p0070.png';
import p0074 from '../assets/pictogramme_weather/p0074.png';
import p0079 from '../assets/pictogramme_weather/p0079.png';
import p0080 from '../assets/pictogramme_weather/p0080.png';
import p0085 from '../assets/pictogramme_weather/p0085.png';
import p0089 from '../assets/pictogramme_weather/p0089.png';
import p0090 from '../assets/pictogramme_weather/p0090.png';
import x3050 from '../assets/pictogramme_weather/x3050.png';
import x4969 from '../assets/pictogramme_weather/x4969.png';
import x7039 from '../assets/pictogramme_weather/x7039.png';
import x7060 from '../assets/pictogramme_weather/x7060.png';
import x7960 from '../assets/pictogramme_weather/x7960.png';
import x8030 from '../assets/pictogramme_weather/x8030.png';
import x8080 from '../assets/pictogramme_weather/x8080.png';
import x8960 from '../assets/pictogramme_weather/x8960.png';
import x8969 from '../assets/pictogramme_weather/x8969.png';
import sable from '../assets/pictogramme_weather/sable.png';


const getWeatherData = async () => {
  const apiUrl = 'https://api.open-meteo.com/v1/meteofrance?latitude=48.85&longitude=2.35&current_weather=true&timezone=Europe%2FBerlin';
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
// https://www.lachainemeteo.com/legende-pictogrammes

const weather_codes = {
  0: 'Ciel dégagé',
  1: 'Ciel dégagé en général',
  2: 'Plutôt beau temps',
  3: 'Périodes dégagées prolongées',
  4: 'Partiellement nuageux',
  5: 'Nuages ​​épars',
  6: 'Assez nuageux',
  7: 'Nuageux en général',
  8: 'Couvert',
  9: '???',
  10: 'Brume',
  11: 'Brouillard au sol',
  12: 'Brouillard au sol',
  13: 'Foudre en nappe',
  14: 'Quelques averses',
  15: 'Quelques averses',
  16: 'Quelques averses',
  17: 'Orage isolé',
  18: 'Rafales de vent',
  19: 'Trombe marine',
  20: 'Possible bruine',
  21: 'Possible pluie',
  22: 'Possible neige',
  23: 'Pluie et neige légères',
  24: 'Légère pluie verglaçante',
  25: 'Légère averse de pluie',
  26: 'Légère averse de neige',
  27: 'Légère averse de granules de neige ou de pluie/neige mélangées',
  28: 'Possible brouillard',
  29: 'Orage isolé',
  30: 'Tempête de sable',
  31: 'Tempête de sable',
  32: 'Tempête de sable',
  33: 'Tempête de sable intense',
  34: 'Tempête de sable intense',
  35: 'Tempête de sable intense',
  36: 'Averses de neige',
  37: 'Fortes averses de neige',
  38: 'Neige tourbillonnante',
  39: 'Fortes chutes de neige tourbillonnante',
  40: 'Brouillard localisé',
  41: 'Brouillard localisé',
  42: 'Brouillard',
  43: 'Brouillard',
  44: 'Brouillard',
  45: 'Brouillard dense',
  46: 'Brouillard dense',
  47: 'Brouillard dense',
  48: 'Brouillard givrant',
  49: 'Brouillard givrant',
  50: 'Légère bruine occasionnelle',
  51: 'Légère bruine',
  52: 'Bruine occasionnelle',
  53: 'Bruine',
  54: 'Bruine occasionnelle forte',
  55: 'Forte bruine',
  56: 'Bruine verglaçante',
  57: 'Pluie verglaçante',
  58: 'Pluie',
  59: 'Pluie',
  60: 'Pluie',
  61: 'Légère pluie',
  62: 'Pluie',
  63: 'Pluie',
  64: 'Pluie forte',
  65: 'Forte pluie',
  66: 'Pluie verglaçante',
  67: 'Pluie verglaçante', 
  68: "Léger brouillard givrant", 
  69: "Fortes averses de pluie verglaçante", 
  70: "Léger crachin verglaçant", 
  71: "Forte averse de grésil", 
  72: "Léger grésil", 
  73: "Pluie verglaçante", 
  74: "Forte pluie verglaçante", 
  75: "Légère pluie verglaçante", 
  76: "Grains de glace", 
  77: "Forte intensité de grains de glace",
  78: "Légère intensité de grains de glace", 
  79: "Poudrerie", 
  80: "Neige", 
  81: "Fortes chutes de neige", 
  82: "Légères chutes de neige",
  83: "Orages violents et pluie", 
  84: "Orages légers et pluie", 
  85: "Orages violents et neige", 
  86: "Orages légers et neige", 
  87: "Précipitations mixtes fortes",
  88: "Précipitations mixtes légères", 
  89: "Fortes pluies",
  90: "Légères pluies", 
  91: "Forte pluie et neige", 
  92: "Légère pluie et neige", 
  93: "Fortes chutes de neige", 
  94: "Légères chutes de neige", 
  95: "Fortes chutes de neige avec vent", 
  96: "Légères chutes de neige avec vent", 
  97: "Fortes pluies avec vent", 
  98: "Légères pluies avec vent", 
  99: "Forte averse de grêle"
}

const weather_picto = {
  0: "c0000",
  1: "c0050",
  2: "c0050",
  3: "c0050",
  4: "c0010",
  5: "c0010",
  6: "c0023",
  7: "c0025",
  8: "c0053",
  9: "???",
  10: "c0060",
  11: "c0069",
  12: "c0069",
  13: "c0089",
  14: "p0020",
  15: "p0020",
  16: "p0020",
  17: "c0049",
  18: "c0080",
  19: "x7060",
  20: "x7060",
  21: "p0050",
  22: "p0080",
  23: "p0074",
  24: "p0090",
  25: "p0050",
  26: "p0080",
  27: "p0074",
  28: "c0060",
  29: "c0049",
  30: "sable",
  31: "sable",
  32: "sable",
  33: "sable",
  34: "sable",
  35: "sable",
  36: "p0074",
  37: "p0085",
  38: "p0085",
  39: "p0085",
  40: "c0060",
  41: "c0060",
  42: "c0060",
  43: "c0060",
  44: "c0060",
  45: "c0060",
  46: "c0060",
  47: "c0060",
  48: "c0069",
  49: "c0069",
  50: "x3050",
  51: "x3050",
  52: "p0010",
  53: "p0010",
  54: "p0010",
  55: "p0010",
  56: "c0069",
  57: "p0090",
  58: "p0010",
  59: "p0010",
  60: "p0020",
  61: "p0050",
  62: "p0020",
  63: "p0030",
  64: "p0070",
  65: "p0040",
  66: "p0090",
  67: "p0090", 
  68: "c0069", 
  69: "p0090", 
  70: "p0030", 
  71: "p0020", 
  72: "p0020", 
  73: "p0090", 
  74: "p0090", 
  75: "p0090", 
  76: "p0079", 
  77: "p0079",
  78: "p0069", 
  79: "p0074", 
  80: "p0089", 
  81: "p0085", 
  82: "p0080",
  83: "x8960", 
  84: "x7960", 
  85: "x4969", 
  86: "p0069", 
  87: "p0049",
  88: "p0039", 
  89: "p0040",
  90: "p0020", 
  91: "p0049", 
  92: "p0039", 
  93: "p0085", 
  94: "p0080", 
  95: "x8080", 
  96: "x7039", 
  97: "x8030", 
  98: "x7060", 
  99: "x8969"
}

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
    <View>
      {weatherData ? (
        <>
          <Text style={styles.text}>Météo</Text>
          <Image style={[styles.logo, { alignSelf: "center", marginBottom: 10 }]} source={require(`../assets/pictogramme_weather/${weather_picto[weatherData.current_weather.weathercode]}.png`)}/>
          <Text style={styles.text}>Température: {weatherData.current_weather.temperature}°C</Text>
          <Text style={styles.text}>Vitesse du vent: {weatherData.current_weather.windspeed} km/h</Text>
          <Text style={styles.text}>Code météo: {weatherData.current_weather.weathercode}</Text>
          <Text style={styles.text}>Description météo: {weather_codes[weatherData.current_weather.weathercode]}</Text>
          <Text style={styles.text}>Dernière mise à jour: {new Date(weatherData.current_weather.time).toLocaleTimeString()}</Text>
        </>
      ) : (
        <Text style={styles.text}>Chargement des données...</Text>
      )}
      
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

export default WeatherInfo;
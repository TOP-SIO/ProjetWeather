import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.loginWrapper}>
      <View style={styles.login}>
        <View style={styles.loginOverlapGroup}>
          <Text style={styles.authentication}>Authentification</Text>
          <View style={styles.zoneIdentifiant}>
            <Text style={styles.usernameLabel}>Identifiant</Text>
          </View>
          <View style={styles.zoneMDP}>
            <Text style={styles.passwordLabel}>Mot de passe</Text>
          </View>
          <View style={styles.loginOverlapGroup1}>
            <View style={styles.rectangle4} />
            <Text style={styles.connect}>Se connecter</Text>
          </View>
          <Text style={styles.passwordForgotten}>Mot de passe oublié</Text>
        </View>
        {/* 
        <Image
          style={styles.backgroundImage}
          source={require('./45332c6a-e332-4225-80ac-c6fd7047d444-removebg-preview-1.png')}
        />
        */}
        <View style={styles.rectangle3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#301F3C',
  },
  login: {
    width: 1440,
    height: 960,
  },
  loginOverlapGroup: {
    position: 'absolute',
    left: 318,
    top: 371,
    width: 804,
    height: 477,
    backgroundColor: '#513465',
    borderRadius: 41,
  },
  authentication: {
    position: 'absolute',
    left: 275,
    top: 28,
    fontSize: 36,
    lineHeight: 41,
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
  },
  zoneIdentifiant: {
    position: 'absolute',
    left: 107,
    top: 137,
    width: 604,
    height: 71,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
  },
  usernameLabel: {
    position: 'absolute',
    left: 89,
    top: 18,
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    fontFamily: 'Ubuntu',
  },
  zoneMDP: {
    position: 'absolute',
    left: 107,
    top: 218,
    width: 604,
    height: 71,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
  },
  passwordLabel: {
    position: 'absolute',
    left: 89,
    top: 18,
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    fontFamily: 'Ubuntu',
  },
  loginOverlapGroup1: {
    position: 'absolute',
    left: 274,
    top: 343,
    width: 255,
    height: 79,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
  },
    connect: {
    position: 'absolute',
    left: 45,
    top: 16,
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    fontFamily: 'Ubuntu',
  },
  passwordForgotten: {
    position: 'absolute',
    left: 311,
    top: 308,
    fontSize: 20,
    lineHeight: 23,
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
  },
  backgroundImage: {
    position: 'absolute',
    left: 214,
    top: 63,
    width: 376,
    height: 213,
  },
  rectangle3: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 1440,
    height: 165,
    backgroundColor: '#513465',
  },
});

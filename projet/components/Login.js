import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.loginWrapper}>
      <View style={styles.login}>
        <Image
          source={require('../assets/topsio.png')}
          style={styles.logo}
        />
        <Text style={styles.authentication}>Authentification</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Entrez votre identifiant"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Entrez votre mot de passe"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    logo: {
    height: '20%', 
    resizeMode: 'contain', 
    marginBottom: '5%',
  },

  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#301F3C',
    padding: '5%',
  },
  login: {
    width: '100%',
    height: '100%',
    backgroundColor: '#513465',
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  authentication: {
    fontSize: 36,
    lineHeight: 41,
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
    marginBottom: '5%',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: '5%',
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
    fontSize: 20,
    fontFamily: 'Ubuntu',
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 28,
    color: '#000000',
    fontFamily: 'Ubuntu',
  },
  forgotPasswordText: {
    fontSize: 20,
    lineHeight: 23,
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
  },
});

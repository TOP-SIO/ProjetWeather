import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/topsio.png')}
        style={styles.logo}
      />
      <View style={styles.loginWrapper}>
        <View style={styles.login}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#301F3C',
    height:'75%',
  },
  logo: {
    marginTop:'5%',
    width: '20%', // set the width and height that works for your logo
    resizeMode: 'contain',
  },
  loginWrapper: {
    width: '80%',
    backgroundColor: '#513465',
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  login: {
    width: '100%',
    alignItems: 'center',
  },
  authentication: {
    fontSize: 36,
    lineHeight: 41,
    color: '#FFFFFF',
    fontFamily: 'Ubuntu',
    marginBottom: '5%',
  },
  inputWrapper: {
    width: '80%',
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
    fontSize: 20,
    fontFamily: 'Ubuntu',
    paddingHorizontal: '6%',
    marginBottom: '2.5%',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FDFBF7',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
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
    marginTop: '20%',
  },
});

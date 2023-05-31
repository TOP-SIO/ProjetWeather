import { View, StyleSheet } from 'react-native';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';



export default function LoginApp() {
  return (
    <View style={[styles.container, { backgroundColor: '#301F3C' }]}>

      <Dashboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent : 'space-around',
    backgroundColor: '#301F3C',
  }
});


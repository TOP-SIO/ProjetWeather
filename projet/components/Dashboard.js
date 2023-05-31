import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Dashboard = () => {
  const data = ['Chambre 1', 'Chambre 2', 'Chambre 3', 'Chambre 4', 'Chambre 5','Chambre 6','Chambre 7'];

  return (
    <View style={styles.ipadMini}>
      <View style={styles.ipadMini831}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          {data.map((item, index) => (
            <View style={styles.chambre_f} key={index}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.donneechambreWrapper}>
          <View style={styles.donneechambre} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ipadMini: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ipadMini831: {
    backgroundColor: '#301f3c',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 0.3, 
    width: '100%',
    marginBottom: '-20%', 
    marginTop:'5%',
  },
  donneechambreWrapper: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    paddingBottom:'5%',
  },
  donneechambre: {
    backgroundColor: '#bdbdbd',
    borderRadius: 41,
    width: '100%',
    height: '100%',
  },
  chambre_f: {
    width: width * 0.2, 
    height: height * 0.1, 
    backgroundColor: '#0A9396',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

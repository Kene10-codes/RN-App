import {View, Text, StyleSheet, Image} from 'react-native';
import Navbar from '../components/Navbar';

export default function Home () {
  return (
    <View style={styles.home}>
      <Navbar logoText="A" />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Hi, Adams ✌️,</Text>
        <Text style={styles.balance}>
          Your account balance:
          {' '}
          <Text style={styles.balanceValue}>20</Text>
          {' '}
          coins
        </Text>
        <Text style={styles.compliments}>How are you feeling?</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require ('../assets/darkGreen.jpg')}
        />
        <View style={styles.imageContent}>
          <Text style={styles.imageHeader}>Smart</Text>
          <Text style={styles.imageHeader__two}>Deposit Coins</Text>
        </View>

      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require ('../assets/yellow.jpg')} />
        <View style={styles.imageContent}>
          <Text style={styles.imageHeader}>Lucky</Text>
          <Text style={styles.imageHeader__two}>Withdraw Coins</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  wrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  home: {
    backgroundColor: '#000',
    height: 900,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    paddingBottom: 5,
  },
  balance: {
    color: '#fff',
    fontSize: 18,
  },
  balanceValue: {
    color: 'green',
    fontSize: 18,
  },
  compliments: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bolder',
    paddingTop: 20,
    paddingBottom: 10,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    height: 180,
    width: 360,
    borderRadius: 15,
  },
  imageHeader: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  imageHeader__two: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  imageContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 50,
    top: 10,
  },
});

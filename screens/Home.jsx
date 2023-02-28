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
        <Image style={styles.image} source={require ('../assets/Smart2.png')} />
        <View style={styles.imageContent}>
          <Text style={styles.imageHeader}>Smart</Text>
          <Text style={styles.imageHeader__two}>Deposit Coins</Text>
        </View>

      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require ('../assets/Smart.png')} />
        <View style={styles.imageContent}>
          <Text style={styles.imageHeader}>Lucky</Text>
          <Text style={styles.imageHeader__two}>Withdraw Coins</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  home: {
    backgroundColor: '#030303',
    height: 900,
    paddingTop: 25,
  },
  wrapper: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  name: {
    color: '#FDFDFD',
    fontSize: 18,
    paddingBottom: 3,
  },
  balance: {
    color: '#FDFDFD',
    fontSize: 18,
  },
  balanceValue: {
    color: '#116D44',
    fontSize: 18,
  },
  compliments: {
    color: '#FDFDFD',
    fontSize: 50,
    fontWeight: 'bolder',
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  image: {
    height: 180,
    width: 360,
    borderRadius: 5,
  },
  imageHeader: {
    color: '#FDFDFD',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  imageHeader__two: {
    color: '#FDFDFD',
    fontSize: 18,
    textAlign: 'center',
  },
  imageContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    top: 20,
  },
});

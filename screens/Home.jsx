import {View, Text, StyleSheet} from 'react-native';
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
    paddingBottom: 20,
  },
});

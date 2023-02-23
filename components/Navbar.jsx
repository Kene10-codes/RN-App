import {View, Text, StyleSheet, Image} from 'react-native';
export default function Navbar({logoText}) {
  return (
    <View style={styles.navContainer}>
      <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
      <Text style={styles.text}>{logoText}</Text>
    </View>
  );
}
const styles = StyleSheet.create ({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 0.1,
    width: 50,
    height: 50,
  },
  text: {
    color: '#000',
    fontSize: 25,
    borderRadius: 50,
    backgroundColor: '#fff',
    padding: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
  },
});

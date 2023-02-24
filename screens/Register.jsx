import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Register () {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
        <View>
          <Text style={styles.title}>SmartBanc</Text>
          <Text style={styles.subTitle}>Just dey play</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => Alert.alert ('Hi 👋, you are about to sign up.')}
          >
            Sign Up with Account Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTwo}>
          <Text
            style={styles.buttonText__two}
            onPress={() => Alert.alert ('Hi 👋, you are about to login')}
          >
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 750,
    paddingBottom: 200,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: 300,
    marginTop: 60,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: '100',
  },
  buttonWrapper: {
    marginTop: 50,
  },
  button: {
    color: '#fff',
    elevation: 8,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 360,
    backgroundColor: 'green',
    marginBottom: 10,
  },
  buttonTwo: {
    color: '#fff',
    elevation: 8,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    width: 360,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
  buttonText__two: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

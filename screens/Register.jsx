import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  onPress,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Register () {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require ('../assets/logo.png')} />
        <View>
          <Text style={styles.title}>SmartBanc</Text>
          <Text style={styles.subTitle}>Just dey play</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate ('LoginPhone')}
          >
            Sign Up with Account Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTwo}>
          <Text
            style={styles.buttonText__two}
            onPress={() => navigation.navigate ('Login')}
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
    backgroundColor: '#030303',
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
    color: '#FDFDFD',
    fontSize: 32,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#FDFDFD',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: '100',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    color: '#FDFDFD',
    height: 45,
    elevation: 8,
    borderRadius: 5,
    borderColor: '#FDFDFD',
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 330,
    backgroundColor: '#116D44',
    marginBottom: 10,
  },
  buttonTwo: {
    color: '#FDFDFD',
    elevation: 8,
    backgroundColor: '#030303',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    height: 45,
    width: 330,
    borderWidth: 0.5,
    borderColor: '#FDFDFD',
  },
  buttonText: {
    color: '#FDFDFD',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
  buttonText__two: {
    color: '#FDFDFD',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

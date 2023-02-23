import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Feather} from '@expo/vector-icons';

import 'react-native';
export default function Login () {
  const [text, onChangeText] = useState ('Adams234');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
        <View>
          <View>
            <Feather
              name="arrow-left-circle"
              size={24}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.title}>Sweet!</Text>
            <Text style={styles.subTitle}>
              A friend of #234453 is a friend of ours.
            </Text>
            <Text style={styles.subTitle}>
              What do you want us to call you?
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => Alert.alert ('Hi 👋, you are welcome')}
            >
              Enter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    height: 750,
    paddingBottom: 200,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 65,
    marginBottom: 110,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  icon: {
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'left',
    paddingTop: 5,
    fontWeight: '100',
  },

  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: 350,
    marginBottom: 10,
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
    width: 350,
    backgroundColor: 'green',
    marginTop: 10,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

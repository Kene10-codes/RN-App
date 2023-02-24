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
import {Formik} from 'formik';

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
        <View>
          <Formik
            initialValues={{username: 'Adams234'}}
            onSubmit={values => Alert.alert (JSON.stringify (values.username))}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.buttonWrapper}>
                <TextInput
                  onChangeText={handleChange ('username')}
                  onBlur={handleBlur ('username')}
                  value={values.username}
                  style={styles.input}
                />
                {/* <Button onPress={handleSubmit} title="Submit" /> */}
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={handleSubmit}
                    title="Submit"
                  >
                    Enter
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
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
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 18,
    width: 360,
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

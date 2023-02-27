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

export default function Welcome () {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
        <View>
          <View>
            <Feather
              name="arrow-left-circle"
              size={24}
              color="#FDFDFD"
              style={styles.icon}
            />
            <Text style={styles.title}>
              Welcome back, Adams234
            </Text>
          </View>
        </View>
        <View>
          <Formik
            initialValues={{phone: '08168902345'}}
            onSubmit={values => Alert.alert (JSON.stringify (values.phone))}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.buttonWrapper}>
                <TextInput
                  onChangeText={handleChange ('phone')}
                  onBlur={handleBlur ('phone')}
                  value={values.phone}
                  style={styles.input}
                  keyboardType="numeric"
                />
                {/* <Button onPress={handleSubmit} title="Submit" /> */}
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={handleSubmit}
                    title="Submit"
                  >
                    Send OTP
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
    backgroundColor: '#030303',
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
    color: '#FDFDFD',
    fontSize: 26,
    fontWeight: 'bolder',
    paddingBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FDFDFD',
    color: '#FDFDFD',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    width: 360,
  },

  buttonWrapper: {
    marginTop: 50,
  },
  button: {
    color: '#FDFDFD',
    elevation: 8,
    borderRadius: 5,
    borderColor: '#FDFDFD',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 360,
    backgroundColor: '#116D44',
    marginTop: 10,
    height: 50,
  },
  buttonText: {
    color: '#FDFDFD',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

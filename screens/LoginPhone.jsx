import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

export default function LoginPhone () {
  const navigation = useNavigation ();
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
              onPress={() => navigation.navigate ('Register')}
            />
            <Text style={styles.title}>
              Nice One, Adams234
            </Text>
            <Text style={styles.subTitle}>
              What is your phone number?
            </Text>
          </View>
        </View>
        <View>
          <Formik
            initialValues={{phone: '08168902345'}}
            onSubmit={() => navigation.navigate ('VerifyOTP')}
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
    marginBottom: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'left',
    paddingTop: 5,
    fontWeight: '100',
    paddingBottom: 10,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    width: 335,
  },

  buttonWrapper: {
    marginTop: 50,
  },
  button: {
    color: '#fff',
    elevation: 8,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#116D44',
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

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
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

export default function Login () {
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
              color="#FDFDFD"
              style={styles.icon}
              onPress={() => navigation.navigate ('InviteCode')}
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
            onSubmit={values => navigation.navigate ('Welcome')}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.buttonWrapper}>
                <TextInput
                  onChangeText={handleChange ('username')}
                  onBlur={handleBlur ('username')}
                  value={values.username}
                  style={styles.input}
                />
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
    marginBottom: 25,
  },
  title: {
    color: '#FDFDFD',
    fontSize: 26,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#FDFDFD',
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
    borderColor: '#FDFDFD',
    color: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    width: 330,
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
    width: 330,
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

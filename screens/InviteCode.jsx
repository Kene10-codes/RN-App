import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Formik} from 'formik';

const initialValues = {
  code1: '5',
  code2: '-',
  code3: '-',
  code4: '-',
  code5: '-',
  code6: '-',
};

export default function InviteCode () {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
        <View style={styles.content}>
          <Feather
            name="arrow-left-circle"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.title}>Hey there,</Text>
          <Text style={styles.subTitle}>
            Please enter your invite code
          </Text>
        </View>
        <View>
          <Formik
            initialValues={initialValues}
            onSubmit={values => Alert.alert (JSON.stringify (values))}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View style={styles.fieldInputs}>
                  <TextInput
                    onChangeText={handleChange ('code1')}
                    onBlur={handleBlur ('code1')}
                    value={values.code1}
                    style={styles.input__orange}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={handleChange ('code2')}
                    onBlur={handleBlur ('code2')}
                    value={values.code2}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={handleChange ('code3')}
                    onBlur={handleBlur ('code3')}
                    value={values.code3}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={handleChange ('code4')}
                    onBlur={handleBlur ('code4')}
                    value={values.code4}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={handleChange ('code5')}
                    onBlur={handleBlur ('code5')}
                    value={values.code5}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={handleChange ('code6')}
                    onBlur={handleBlur ('code6')}
                    value={values.code6}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
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
    marginBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    paddingBottom: 55,
  },
  icon: {
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bolder',
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    paddingTop: 5,
    fontWeight: '100',
  },
  fieldInputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input__orange: {
    height: 75,
    width: 54,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    height: 75,
    width: 54,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

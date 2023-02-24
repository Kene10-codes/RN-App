import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import Nav from './screens/Nav';
import LoginScreen from './screens/Login';
import LoginPhone from './screens/LoginPhone';
import InviteCode from './screens/InviteCode';
import VerifyOTP from './screens/VerifyOTP';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Home from './screens/Home';

const Stack = createNativeStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Nav"
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Nav" component={Nav} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginPhone" component={LoginPhone} />
          <Stack.Screen name="InviteCode" component={InviteCode} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingLeft: 13,
    paddingRight: 13,
    height: 1000,
  },
  text: {
    color: '#fff',
  },
});

import React from 'react';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';

export default function Register () {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require ('../assets/logo.jpg')} />
        <View>
          <Text>SmartBanc</Text>
          <Text>Just dey play</Text>
        </View>
      </View>

      <View>
        <Button
          title="Press me"
          onPress={() => Alert.alert ('Simple Button pressed')}
        />
        <Button
          title="Press me"
          onPress={() => Alert.alert ('Simple Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 'auto',
  },
  text: {
    color: '#fff',
  },
});

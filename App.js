import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {Navigator} from './components/BottomNav';
import Home from './screens/Home';

export default function App () {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigator>
          <Home />
        </Navigator>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingLeft: 13,
    paddingRight: 13,
  },
  text: {
    color: '#fff',
  },
});

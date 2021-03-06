import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import AppContainer from './src/routers/AppContainer';
import AppMobile from './src/mobile/Appphone';
import DeviceInfo from 'react-native-device-info';
//import {Main} from './src/mobile/main';
export default function App() {
  return (
    <View style={styles.container}>
      {DeviceInfo.isTablet() ? <AppContainer /> : <AppMobile />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

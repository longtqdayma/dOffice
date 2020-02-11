import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LeftPanel from './src/components/LeftPanel';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.panel}>
          <LeftPanel></LeftPanel>
        </View>
        <View style={styles.content}>
          <View style = {styles.header}>
            <Header></Header>
          </View>
          <View style = {styles.content}>
            <Text>This is for content part</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flex: 1,
  },
  panel: {
    flex: 2,
    backgroundColor: 'white',
  },
  content: {
    flex: 8,
    backgroundColor: '#F7F6F4',
  },
  header: {
    flex: 1.5,
  }
});

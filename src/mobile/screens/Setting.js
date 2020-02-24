import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Text, Image} from 'native-base';
import BottomNavigator from '../BottomNavigator';
import CustomHeader from '../CustomHeader';


export default class Setting extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Setting Detail"
          isHome={false}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting!</Text>
        </View>
        <BottomNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

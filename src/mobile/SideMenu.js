import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SideMenu extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Button onPress={() => this.props.navigation.navigate('Feed')}>
          <Ionicons name="ios-body" size={25}>
            Profile
          </Ionicons>
        </Button>

        <Button onPress={() => this.props.navigation.navigate('Search')}>
          <Ionicons name="ios-bookmarks" size={25}>
            Setting
          </Ionicons>
        </Button>
      </SafeAreaView>
    );
  }
}

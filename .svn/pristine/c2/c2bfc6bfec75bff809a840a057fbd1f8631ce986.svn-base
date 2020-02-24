import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Button, Icon, Title, Text, Image} from 'native-base';
import BottomNavigator from '../BottomNavigator';
import CustomHeader from '../CustomHeader';

export default class Search extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Search"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Search!</Text>
          <Button
            light
            onPress={() => {
              this.props.navigation.navigate('SearchDetail');
            }}>
            <Text>Go to Search Detail</Text>
          </Button>
        </View>
        <BottomNavigator navigation={this.props.navigation}></BottomNavigator>
      </View>
    );
  }
}

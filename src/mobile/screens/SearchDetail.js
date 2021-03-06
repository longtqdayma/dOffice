import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Button, Icon, Title, Text, Image} from 'native-base';
import BottomNavigator from '../BottomNavigator';
import CustomHeader from '../CustomHeader';


export default class SearchDetail extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Search Detail"
          isHome={false}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>SearchDetail!</Text>
          <Button light>
            <Text>Search Detail SSSSSSSSS</Text>
          </Button>
        </View>
        <BottomNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

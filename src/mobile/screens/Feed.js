import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Button, Icon, Title, Text, Image} from 'native-base';
import BottomNavigator from '../BottomNavigator';
import CustomHeader from '../CustomHeader';

export default class Feed extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          title="Feed"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed!</Text>
          <Button
            light
            onPress={() => {
              console.log('Go to Feed Detail');
              this.props.navigation.navigate('FeedDetail');
            }}>
            <Text>Go to Feed Detail</Text>
          </Button>
        </View>
        <BottomNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

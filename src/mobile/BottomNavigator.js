import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from 'react-native';
import {Icon} from 'native-base';
export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View
        style={{
          // flex: 1,
          height:60.3,
          flexDirection: 'column',
          backgroundColor: 'grey',
        }}>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'grey',
            width: 60,
            height: 60,
            borderRadius: 35,
            bottom: 30,
            zIndex: 10,
          }}>
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
              <Image
                style={{resizeMode: 'cover', width:60, height: 60}}
                source={require('../assets/img/logo-notext.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: 2,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: {marginVertical: 5},
            bottom: 0,
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}>
              <Icon active name="home" size={30} color="#FFF" />
            </TouchableOpacity>
            {/* <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Home
            </Text> */}
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginStart: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}>
              <Icon active name="search" size={30} color="#FFF" />
            </TouchableOpacity>
            {/* <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              search{' '}
            </Text> */}
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginStart: 85,
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}>
              <Icon active name="contacts" size={30} color="#FFF"
                style={{marginHorizontal: 16, width: 30, height: 30}}
                containerStyle={{marginHorizontal: 16}}
              />
            </TouchableOpacity>
            {/* <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Menu{' '}
            </Text> */}
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}>
              <Icon active name="menu" size={30} color="#FFF"
                style={{marginHorizontal: 16, width: 30, height: 30}}
                containerStyle={{marginHorizontal: 16}}
              />
            </TouchableOpacity>
            {/* <Text style={{justifyContent: 'center', alignItems: 'center'}}>
              Setting{' '}
            </Text> */}
          </View>

          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: '#1E90FF',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

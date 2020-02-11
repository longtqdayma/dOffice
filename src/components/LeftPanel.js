import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {default as Feather} from 'react-native-vector-icons/Feather';
import {default as Ant} from 'react-native-vector-icons/AntDesign';
import {default as Fontisto} from 'react-native-vector-icons/Fontisto';

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 'home',
    };
  }

  onPress = buttonName => {
    this.setState({
      selectedButton: buttonName,
    });
  };

  render() {
    return (
      <View style={styles.main}>
        <Image
          source={require('../assets/img/evn-logo.png')}
          style={{
            width: 70,
            height: 80,
            flex: 2,
            resizeMode: 'contain',
          }}
        />
        <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
          {/* Home */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'home'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('home')}>
              <Ant
                name="home"
                size={40}
                color={
                  this.state.selectedButton === 'home' ? 'white' : '#565c58'
                }></Ant>
              {this.state.selectedButton === 'home' ? (
                <Text style={{fontSize: 20, color: 'white'}}> Trang chủ </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {/* eOffice */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'eoffice'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('eoffice')}>
              <Feather
                name="file-text"
                size={40}
                color={
                  this.state.selectedButton === 'eoffice' ? 'white' : '#565c58'
                }></Feather>
              {this.state.selectedButton === 'eoffice' ? (
                <Text style={{fontSize: 20, color: 'white'}}> e-Office </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {/* Contact */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'contacts'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('contacts')}>
              <Ant
                name="contacts"
                size={40}
                color={
                  this.state.selectedButton === 'contacts' ? 'white' : '#565c58'
                }></Ant>
              {this.state.selectedButton === 'contacts' ? (
                <Text style={{fontSize: 20, color: 'white'}}> Liên lạc </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {/* Chat */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'chat'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('chat')}>
              <Fontisto
                name="hipchat"
                size={40}
                color={
                  this.state.selectedButton === 'chat' ? 'white' : '#565c58'
                }></Fontisto>
              {this.state.selectedButton === 'chat' ? (
                <Text style={{fontSize: 20, color: 'white'}}> Trao đổi </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {/* Calendar */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'calendar'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('calendar')}>
              <Ant
                name="calendar"
                size={40}
                color={
                  this.state.selectedButton === 'calendar' ? 'white' : '#565c58'
                }></Ant>
              {this.state.selectedButton === 'calendar' ? (
                <Text style={{fontSize: 20, color: 'white'}}> Lịch </Text>
              ) : null}
            </TouchableOpacity>
          </View>
          {/* Settings */}
          <View style={{flex: 2}}>
            <TouchableOpacity
              style={
                this.state.selectedButton === 'settings'
                  ? styles.buttonSelected
                  : styles.button
              }
              onPress={() => this.onPress('settings')}>
              <Feather
                name="settings"
                size={40}
                color={
                  this.state.selectedButton === 'settings' ? 'white' : '#565c58'
                }></Feather>
              {this.state.selectedButton === 'settings' ? (
                <Text style={{fontSize: 20, color: 'white'}}> Cài đặt </Text>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#3851A3',
    padding: 10,
    height: 60,
    borderRadius: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F7F6F4',
    padding: 10,
    height: 60,
    borderRadius: 15,
  },
});

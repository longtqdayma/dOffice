import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native';
import {default as AntIcon} from 'react-native-vector-icons/AntDesign';
import {default as SimpleIcon} from 'react-native-vector-icons/SimpleLineIcons';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.panelButtons}>
          <TouchableOpacity style={styles.button}>
            <AntIcon name="menuunfold" size={30}></AntIcon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <SimpleIcon name="people" size={30}></SimpleIcon>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style = {styles.user}>
            <Image
              source={require('../assets/img/avt.jpg')}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                borderRadius: 15,
                flex: 1
              }}
            />
            <Text style = {{flex: 1}}>Võ Nguyên Thiên Định</Text>
          </TouchableOpacity>
          <TextInput ></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F6F4',
    flex: 1,
    flexDirection: 'column',
  },
  panelButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    margin: 20,
    //   marginLeft: 20,
    //   marginRight: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  user: {
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 3
  }
});

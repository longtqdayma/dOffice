import React from 'react';
import {default as Feather} from 'react-native-vector-icons/Feather';
import {default as Ant} from 'react-native-vector-icons/AntDesign';
import {default as Fontisto} from 'react-native-vector-icons/Fontisto';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* Menu  */
  main: {
    // flex: 1,
    width: 150,
    // flexDirection: 'column',
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

const SidebarTabs = ({navigation, descriptors}) => {
  const {routes, index} = navigation.state;

  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/img/evn-logo.png')}
        style={{width: 70, height: 80, flex: 2, resizeMode: 'contain'}}
      />
      <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
        {routes.map((route, tabIndex) => {
          const {routeName, params} = route;
          const {icon, tabName} = params || {};
          const color = tabIndex === index ? '#0068ff' : '#000';

          return (
            <View style={{flex: 2}} key={route.routeName}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
                style={styles.tab}
                key={route.routeName}>
                <Ant name={icon} size={40} />
                <View style={{flex: 1}}>
                  <Text style={{color, fontSize: 20}}>{tabName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SidebarTabs;

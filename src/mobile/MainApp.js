import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Feed from './screens/Feed';
import Search from './screens/Search';
import FeedDetail from './screens/FeedDetail';
import SearchDetail from './screens/SearchDetail';

import Profile from './screens/Profile';
import Setting from './screens/Setting';

import SideMenu from './SideMenu';

const navOptionHandler = nagigation => ({
  header: null,
});
const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler,
  },
  FeedDetail: {
    screen: FeedDetail,
    navigationOptions: navOptionHandler,
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler,
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: navOptionHandler,
  },
});

const appDrawer = createDrawerNavigator(
  // {
  //   drawerhhh: MainStack,
  // },
  {
    MFeed: {
      screen: FeedStack,
    },
    MSearch: {
      screen: SearchStack,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get('window').width * 3) / 4,
  },
);

export default createAppContainer(appDrawer);
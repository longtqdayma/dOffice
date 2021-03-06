import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createSidebarNavigator} from './tabs';
import {Home, Danhba, DsVanBan} from './../views/tablets/index';
// import {Login} from './../auth/login';

const sidebarNavigator = createSidebarNavigator(
  {
    Home: {
      screen: Home,
      params: {
        icon: 'home',
        tabName: 'Home',
      },
    },
    Danhba: {
      screen: Danhba,
      params: {
        icon: 'clockcircleo',
        tabName: 'Menu 1',
      },
    },
    DsVanBan: {
      screen: DsVanBan,
      params: {
        icon: 'inbox',
        tabName: 'Menu 2',
      },
    },
    DsVanBan1: {
      screen: DsVanBan,
      params: {
        icon: 'menuunfold',
        tabName: 'Menu 3',
      },
    },
    DsVanBan2: {
      screen: Danhba,
      params: {
        icon: 'videocamera',
        tabName: 'Login 5',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(sidebarNavigator);

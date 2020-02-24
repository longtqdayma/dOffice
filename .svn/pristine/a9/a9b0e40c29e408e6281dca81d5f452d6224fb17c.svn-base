import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import MainApp from './MainApp';
import Login from './../auth/login';


const SwitchNavigator = createSwitchNavigator(
  {
    Auth: Login,
    App: MainApp,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppMobile = createAppContainer(SwitchNavigator);

export default AppMobile;

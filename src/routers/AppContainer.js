import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppNavigation from './NavigationStack';
import Login from '../auth/login';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: Login,
    App: AppNavigation,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;

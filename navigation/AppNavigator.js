import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import logOut from '../screens/LogOut';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Items from '../screens/Items';

const AppStack = createStackNavigator({ MainTabNavigator, Items });
const AuthStack = createStackNavigator({ Login, logOut });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

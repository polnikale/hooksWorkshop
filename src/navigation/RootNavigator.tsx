import Login from '../screens/Login';
import AuthNavigator from './AuthNavigator';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  createSwitchNavigator,
  NavigationSwitchAction,
  NavigationSwitchProp,
} from 'react-navigation';

const routes: NavigationRouteConfigMap<
  NavigationSwitchAction,
  NavigationSwitchProp
> = {
  Login,
  AuthNavigator,
};

const AppNavigation = createSwitchNavigator(routes, {
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;

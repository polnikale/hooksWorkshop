import Main from '../screens/Main';
import Profile from '../screens/Profile';
import {
  NavigationStackOptions,
  NavigationStackProp,
  createStackNavigator,
} from 'react-navigation-stack';
import {
  NavigationRouteConfigMap,
  createSwitchNavigator,
} from 'react-navigation';

const routes: NavigationRouteConfigMap<
  NavigationStackOptions,
  NavigationStackProp
> = {
  Main,
  Profile,
};

export default createStackNavigator(routes, {
  initialRouteName: 'Main',
  headerMode: 'none',
});

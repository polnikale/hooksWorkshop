import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
} from 'react-navigation';

let navigator: NavigationContainerComponent | null;

function setTopLevelNavigator(
  navigatorRef: NavigationContainerComponent | null,
) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params: NavigationParams = {}) {
  navigator &&
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
}

function back() {
  navigator && navigator.dispatch(NavigationActions.back());
}

const Navigator = {
  setTopLevelNavigator,
  navigate,
  back,
};

export default Navigator;

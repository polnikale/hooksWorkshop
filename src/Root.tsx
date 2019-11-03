import React, { Dispatch, useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import Navigator from './navigator';
import * as AuthSelectors from './redux/auth/selectors';

interface StateProps {
  loggedIn: boolean;
}

type Props = StateProps;

const Root: React.FunctionComponent<Props> = () => {
  const loggedIn = useSelector(AuthSelectors.getUserLoggedIn);
  const [route, setRoute] = useState<string | undefined>(undefined);
  useEffect(() => {
    setRoute(loggedIn ? 'AuthNavigator' : 'Login');
  }, [loggedIn]);

  useEffect(() => {
    if (route) {
      Navigator.navigate(route);
    }
  }, [route]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
      }}>
      <RootNavigator
        ref={navigatorRef => {
          Navigator.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default React.memo(Root);

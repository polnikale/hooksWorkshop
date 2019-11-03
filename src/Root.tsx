import React, { Dispatch } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import Navigator from './navigator';
import * as AuthSelectors from './redux/auth/selectors';
import { ApplicationState } from './redux/types';

interface StateProps {
  loggedIn: boolean;
}

type Props = StateProps;

class Root extends React.Component<Props> {
  public componentDidMount() {
    this.switchToCorrectRoute();
  }

  public componentDidUpdate() {
    this.switchToCorrectRoute();
  }

  private switchToCorrectRoute = () => {
    const route = this.getRoute();

    if (route) {
      Navigator.navigate(route);
    }
  };

  private getRoute = () => {
    const { loggedIn } = this.props;

    return loggedIn ? 'AuthNavigator' : 'Login';
  };

  render() {
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
  }
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  loggedIn: AuthSelectors.getUserLoggedIn(state),
});

export default connect(mapStateToProps)(Root);

import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import * as AuthSelectors from '../redux/auth/selectors';
import { ApplicationState } from '../redux/types';
import User from '../types/User';

interface StateProps {
  user?: User;
}
type Props = StateProps & NavigationInjectedProps;

class Profile extends React.Component<Props> {
  public render() {
    const { user } = this.props;

    return (
      <View style={{ padding: 40 }}>
        <Text>Profile</Text>
        <Text>{user && user.name}</Text>
        <Button title="GO back" onPress={this.onGoBack} />
      </View>
    );
  }

  private onGoBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  user: AuthSelectors.getUser(state),
});

export default connect(mapStateToProps)(Profile);

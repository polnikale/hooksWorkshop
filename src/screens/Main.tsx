import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import InnerComp from '../components/InnerComp';

type Props = NavigationInjectedProps;

class Main extends React.Component<Props> {
  public render() {
    return (
      <View style={{ padding: 40 }}>
        <Text>Main</Text>
        <InnerComp onPressProfile={this.onPressProfile} />
      </View>
    );
  }
  private onPressProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };
}

export default Main;

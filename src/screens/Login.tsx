import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'src/redux/auth/actions';
import * as AuthActions from '../redux/auth/actions';
import User from '../types/User';
import {
  Button,
  Text,
  TextInput,
  View,
  Keyboard,
  Platform,
  EmitterSubscription,
  KeyboardEvent,
} from 'react-native';

interface DispatchProps {
  setUser: (user: User) => void;
}

type Props = DispatchProps;
interface State {
  email?: string;
  password?: string;
  name?: string;
  lastName?: string;
  keyboardHeight: number;
}

class Login extends React.Component<Props, State> {
  public state = {
    email: undefined,
    password: undefined,
    name: undefined,
    lastName: undefined,
    keyboardHeight: 0,
  };

  private keyboardDidShowListener?: EmitterSubscription;
  private keyboardDidHideListener?: EmitterSubscription;

  public componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      this.onOpenKeyboard,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      this.onCloseKeyboard,
    );
  }

  public componentWillUnmount() {
    this.keyboardDidHideListener && this.keyboardDidHideListener.remove();
    this.keyboardDidShowListener && this.keyboardDidShowListener.remove();
  }

  public render() {
    const { email, password, name, lastName, keyboardHeight } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: keyboardHeight,
        }}>
        <Text>Login</Text>
        <View style={{ padding: 20 }}>
          <TextInput
            value={email}
            onChangeText={this.onEmailChange}
            placeholder="email"
          />
          {email === '' && <Text>Wrong email!</Text>}
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            value={password}
            onChangeText={this.onPasswordChange}
            placeholder="password"
          />
          {password === '' && <Text>Wrong pass!</Text>}
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            value={name}
            onChangeText={this.onNameChange}
            placeholder="name"
          />
          {name === '' && <Text>Wrong name!</Text>}
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            value={lastName}
            onChangeText={this.onLastNameChange}
            placeholder="lastName"
          />
          {lastName === '' && <Text>Wrong lastName!</Text>}
        </View>
        <Button
          title="Sign me up!"
          onPress={this.onLogin}
          disabled={!email || !password || !name || !lastName}
        />
      </View>
    );
  }

  private onOpenKeyboard = (event: KeyboardEvent) => {
    this.setState({
      keyboardHeight: event.endCoordinates.height,
    });
  };
  private onCloseKeyboard = () => {
    this.setState({
      keyboardHeight: 0,
    });
  };

  private onEmailChange = (email: string) => {
    this.setState({
      email,
    });
  };
  private onPasswordChange = (password: string) => {
    this.setState({
      password,
    });
  };
  private onNameChange = (name: string) => {
    this.setState({
      name,
    });
  };
  private onLastNameChange = (lastName: string) => {
    this.setState({
      lastName,
    });
  };
  private onLogin = () => {
    const { name = '', lastName = '', email = '' } = this.state;
    const { setUser } = this.props;

    setUser({
      name,
      lastName,
      email,
    });
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>): DispatchProps => ({
  setUser: (user: User) => {
    dispatch(AuthActions.setUser(user));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);

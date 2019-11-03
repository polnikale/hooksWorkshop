import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
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

interface Props {}

const Login: React.FunctionComponent<Props> = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onEmailChange = useCallback((newEmail: string) => {
    setEmail(newEmail);
  }, []);
  const onPasswordChange = useCallback((newPassword: string) => {
    setPassword(newPassword);
  }, []);
  const onNameChange = useCallback((newName: string) => {
    setName(newName);
  }, []);
  const onLastNameChange = useCallback((newLastName: string) => {
    setLastName(newLastName);
  }, []);

  const onOpenKeyboard = useCallback((event: KeyboardEvent) => {
    setKeyboardHeight(event.endCoordinates.height);
  }, []);
  const onCloseKeyboard = useCallback(() => {
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      onOpenKeyboard,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      onCloseKeyboard,
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(
      AuthActions.setUser({
        name: name || '',
        lastName: lastName || '',
        email: email || '',
      }),
    );
  }, [name, lastName, email, dispatch]);

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
          onChangeText={onEmailChange}
          placeholder="email"
        />
        {email === '' && <Text>Wrong email!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={password}
          onChangeText={onPasswordChange}
          placeholder="password"
        />
        {password === '' && <Text>Wrong pass!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={name}
          onChangeText={onNameChange}
          placeholder="name"
        />
        {name === '' && <Text>Wrong name!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={lastName}
          onChangeText={onLastNameChange}
          placeholder="lastName"
        />
        {lastName === '' && <Text>Wrong lastName!</Text>}
      </View>
      <Button
        title="Sign me up!"
        onPress={onLogin}
        disabled={!email || !password || !name || !lastName}
      />
    </View>
  );
};

export default Login;

import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Actions } from 'src/redux/auth/actions';
import useField from '../hooks/useField';
import useKeyboardHeight from '../hooks/useKeyboardHeight';
import * as AuthActions from '../redux/auth/actions';
import User from '../types/User';

interface Props {}

const Login: React.FunctionComponent<Props> = () => {
  const [email, onEmailChange, emailError] = useField('');
  const [password, onPasswordChange, passwordError] = useField('');
  const [name, onNameChange, nameError] = useField('');
  const [lastName, onLastNameChange, lastNameError] = useField('');
  const keyboardHeight = useKeyboardHeight();

  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(
      AuthActions.setUser({
        name,
        lastName,
        email,
      }),
    );
  }, [name, lastName, email, dispatch]);

  const submitDisabled =
    emailError !== false ||
    nameError !== false ||
    passwordError !== false ||
    lastNameError !== false;

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
        {emailError && <Text>Wrong email!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={password}
          onChangeText={onPasswordChange}
          placeholder="password"
        />
        {passwordError && <Text>Wrong pass!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={name}
          onChangeText={onNameChange}
          placeholder="name"
        />
        {nameError && <Text>Wrong name!</Text>}
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          value={lastName}
          onChangeText={onLastNameChange}
          placeholder="lastName"
        />
        {lastNameError && <Text>Wrong lastName!</Text>}
      </View>
      <Button title="Sign me up!" onPress={onLogin} disabled={submitDisabled} />
    </View>
  );
};

export default Login;

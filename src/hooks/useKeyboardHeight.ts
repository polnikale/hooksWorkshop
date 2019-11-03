import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

export default () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

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

  return keyboardHeight;
};

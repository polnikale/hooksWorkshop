import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import * as AuthSelectors from '../redux/auth/selectors';

interface Props {}

const Profile: React.FunctionComponent<Props> = () => {
  const { goBack } = useNavigation();
  const user = useSelector(AuthSelectors.getUser);

  const onGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={{ padding: 40 }}>
      <Text>Profile</Text>
      <Text>{user && user.name}</Text>
      <Button title="GO back" onPress={onGoBack} />
    </View>
  );
};
export default Profile;

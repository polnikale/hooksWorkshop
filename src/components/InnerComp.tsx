import React, { useCallback } from 'react';
import { Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

interface Props {}

const InnerComp: React.FunctionComponent<Props> = () => {
  const { navigate } = useNavigation();
  const onPressProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return <Button title="view profile" onPress={onPressProfile} />;
};

export default InnerComp;

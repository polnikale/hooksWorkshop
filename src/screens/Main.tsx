import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import InnerComp from '../components/InnerComp';

interface Props {}

const Main: React.FunctionComponent<Props> = () => {
  return (
    <View style={{ padding: 40 }}>
      <Text>Main</Text>
      <InnerComp />
    </View>
  );
};

export default Main;

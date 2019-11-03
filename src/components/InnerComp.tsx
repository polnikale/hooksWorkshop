import React from 'react';
import { Button } from 'react-native';

interface Props {
  onPressProfile: () => void;
}

const InnerComp: React.FunctionComponent<Props> = ({ onPressProfile }) => (
  <Button title="view profile" onPress={onPressProfile} />
);

export default InnerComp;

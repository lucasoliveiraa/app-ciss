import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  background-color: #202020;
  color: #FFF;
  border-radius: 5px;
  margin-bottom: 8px;
`;
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: #A370F3;
  border-radius: 5px;
  padding: 18px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #FFF;
`;
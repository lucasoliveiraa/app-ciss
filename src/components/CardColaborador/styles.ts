import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #1F1E25;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #FFFFFF;
  font-size: ${RFValue(22)}px;
  margin-left: 4px;
`;

export const TextEmail = styled.Text`
  font-weight: bold;
  color: #FFFFFF;
  font-size: ${RFValue(16)}px;
  margin-left: 4px;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

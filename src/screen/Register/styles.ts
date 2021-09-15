import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #121015;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: #A370F3;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
`;

export const Fields = styled.View`
`;

export const TransationTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;
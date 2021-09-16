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

export const TextColab = styled.Text`
  font-weight: bold;
  color: #FFFFFF;
  font-size: ${RFValue(22)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
`;

export const BoxContainer = styled.View`
  background: #1F1E25;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const BoxHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxTitle = styled.Text`
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
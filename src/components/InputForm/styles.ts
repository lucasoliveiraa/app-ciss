import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #E83F5B;
  margin: 7px 0;
`;
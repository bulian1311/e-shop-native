import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const StyledView = styled.View`
  flex: 1;
  width: ${Dimensions.get("window").width}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

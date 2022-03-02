import styled from "styled-components/native";
import { Animated, Dimensions } from "react-native";

export const StyledAnimatedView = styled(Animated.View)`
  width: ${Dimensions.get("window").width - 32}px;
  position: absolute;
  top: 0;
  left: 16px;
  z-index: 100;
  padding-top: 38px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const StyledView = styled.View``;

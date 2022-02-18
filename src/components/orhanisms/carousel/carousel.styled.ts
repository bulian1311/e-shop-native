import styled from "styled-components/native";
import { Animated, Dimensions } from "react-native";

export const StyledAnimatedView = styled(Animated.View)`
  flex-direction: row;
`;

export const StyledView = styled.View`
  width: ${Dimensions.get("screen").width}px;
`;

export const IndicatorsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes[1]};
`;

export const Indicator = styled.View<{ isActive: boolean }>`
  width: ${({ theme }) => theme.sizes[0]};
  height: ${({ theme }) => theme.sizes[0]};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.ui.primary : theme.colors.ui.ghost};
`;

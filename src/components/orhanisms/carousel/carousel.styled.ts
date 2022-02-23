import styled, { css } from "styled-components/native";
import { Animated, Dimensions } from "react-native";

export const StyledAnimatedView = styled(Animated.View)`
  flex-direction: row;
`;

export const StyledView = styled.View`
  width: ${Dimensions.get("screen").width - 32}px;
`;

export const IndicatorsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes[1]};
`;

export const Indicator = styled.View<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    width: ${theme.sizes[1]};
    height: ${theme.sizes[1]};
    border-radius: ${theme.sizes[0]};
    margin-right: ${theme.sizes[1]};
    background-color: ${isActive
      ? theme.colors.ui.primary
      : theme.colors.ui.ghost};
  `}
`;

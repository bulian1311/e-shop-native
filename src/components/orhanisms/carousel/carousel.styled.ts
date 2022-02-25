import styled, { css } from "styled-components/native";
import { Animated, Dimensions } from "react-native";
import { ReactNode } from "react";

export const StyledFlatList = styled.FlatList``;

export const StyledView = styled.View<{
  widthValue: number;
}>`
  width: ${({ widthValue }) => widthValue}px;
`;

export const IndicatorsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes[1]};
`;

export const Indicator = styled(Animated.View)`
  ${({ theme }) => css`
    width: ${theme.sizes[1]};
    height: ${theme.sizes[1]};
    border-radius: ${theme.sizes[0]};
    margin-right: ${theme.sizes[1]};
    background-color: ${theme.colors.ui.primary};
  `}
`;

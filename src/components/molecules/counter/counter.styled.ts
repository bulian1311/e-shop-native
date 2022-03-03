import styled, { css } from "styled-components/native";

export const StyledCounterWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledCount = styled.View`
  ${({ theme }) => css`
    padding-right: ${theme.spacing.space[4]};
    padding-left: ${theme.spacing.space[4]};
    padding-top: ${theme.spacing.space[1]};
    padding-bottom: ${theme.spacing.space[1]};
    background-color: ${theme.colors.ui.ghost};
    align-self: center;
  `}
`;

export const StyledPlus = styled.View`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.ui.ghost};
    border-radius: ${theme.radius[1]};
    padding-right: ${theme.spacing.space[3]};
    padding-left: ${theme.spacing.space[3]};
    padding-top: ${theme.spacing.space[1]};
    padding-bottom: ${theme.spacing.space[1]};
  `}
`;

export const StyledMinus = styled.View`
  ${({ theme }) => css`
    border-width: 1px;
    border-color: ${theme.colors.ui.ghost};
    border-radius: ${theme.radius[1]};
    padding-right: ${theme.spacing.space[3]};
    padding-left: ${theme.spacing.space[3]};
    padding-top: ${theme.spacing.space[1]};
    padding-bottom: ${theme.spacing.space[1]};
  `}
`;

export const StyledTouchableOpacity = styled.TouchableOpacity``;

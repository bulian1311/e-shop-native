import styled, { css } from "styled-components/native";

export const StyledCartInfoWrapper = styled.View`
  ${({ theme }) => css`
    border-width: 1px;
    border-radius: ${theme.radius[1]};
    border-color: ${theme.colors.ui.ghost};
    padding-top: ${theme.spacing.space[4]};
    flex: 1;
  `}
`;

export const StyledView = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.space[4]};
    padding-left: ${theme.spacing.space[4]};
    padding-right: ${theme.spacing.space[4]};
  `}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

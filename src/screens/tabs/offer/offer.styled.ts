import styled, { css } from "styled-components/native";

export const StyledView = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.space[4]};
    padding-bottom: ${theme.spacing.space[4]};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.ui.ghost};
  `}
`;

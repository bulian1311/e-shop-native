import styled, { css } from "styled-components/native";

export const StyledView = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacing.space[4]};
    background-color: ${theme.colors.ui.primary};
    border-radius: ${theme.radius[1]};
  `}
`;

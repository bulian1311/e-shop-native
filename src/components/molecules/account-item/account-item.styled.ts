import styled, { css } from "styled-components/native";

export const StyledView = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-top: ${theme.spacing.space[4]};
    padding-bottom: ${theme.spacing.space[4]};
  `}
`;

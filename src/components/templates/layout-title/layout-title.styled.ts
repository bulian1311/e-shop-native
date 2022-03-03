import styled, { css } from "styled-components/native";

export const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

export const StyledHeaderWrapper = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.space[3]};
    padding-bottom: ${theme.spacing.space[3]};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.ui.ghost};
  `}
`;

export const StyledView = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.space[6]};
  `}
`;

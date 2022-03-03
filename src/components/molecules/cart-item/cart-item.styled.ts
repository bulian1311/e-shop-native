import styled, { css } from "styled-components/native";

export const StyledItemWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding: ${theme.spacing.space[4]};
    border-width: 1px;
    border-color: ${theme.colors.ui.ghost};
    border-radius: ${theme.radius[1]};
  `}
`;

export const StyledViewRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledViewColumn = styled.View`
  flex: 1;
`;

export const StyledIconsWrapper = styled.View`
  flex-direction: row;
`;

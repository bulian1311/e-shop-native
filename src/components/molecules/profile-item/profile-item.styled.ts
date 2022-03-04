import styled, { css } from "styled-components/native";

export const StyledWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledViewLeft = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.space[4]};
    padding-bottom: ${theme.spacing.space[4]};
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const StyledViewRight = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.space[4]};
    padding-bottom: ${theme.spacing.space[4]};
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `}
`;

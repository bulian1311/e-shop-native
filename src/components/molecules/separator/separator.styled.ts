import styled from "styled-components/native";

export const StyledSeparatopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSeparatorLine = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.ui.ghost};
`;

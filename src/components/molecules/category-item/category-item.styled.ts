import styled from "styled-components/native";

export const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-right: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.ui.ghost};
  border-radius: 50%;
`;

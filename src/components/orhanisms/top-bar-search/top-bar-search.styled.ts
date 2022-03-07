import styled from "styled-components/native";

export const StyledView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding-bottom: ${(props) => props.theme.spacing.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.ghost};
`;

export const IconContainer = styled.TouchableOpacity`
  padding-left: ${(props) => props.theme.spacing.space[3]};
`;

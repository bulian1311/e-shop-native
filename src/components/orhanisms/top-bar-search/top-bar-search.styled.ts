import styled from "styled-components/native";

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.spacing.space[3]};
  padding-bottom: ${(props) => props.theme.spacing.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.ghost};
`;

export const IconContainer = styled.TouchableOpacity`
  padding-left: ${(props) => props.theme.spacing.space[3]};
`;
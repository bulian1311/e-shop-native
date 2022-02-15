import styled from "styled-components/native";

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.space[3]};
  margin-bottom: ${(props) => props.theme.spacing.space[3]};
`;

export const IconContainer = styled.TouchableOpacity`
  padding-left: ${(props) => props.theme.spacing.space[3]};
`;

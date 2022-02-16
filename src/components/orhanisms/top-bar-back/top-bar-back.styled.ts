import styled from "styled-components/native";

export const StyledView = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.spacing.space[3]};
  padding-bottom: ${(props) => props.theme.spacing.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.ghost};
`;

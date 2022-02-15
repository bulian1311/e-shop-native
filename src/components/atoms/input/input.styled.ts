import styled from "styled-components/native";
import { ThemeType } from "../../../theme";

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-left: 8px;
`;

export const Container = styled.View<{ focus: boolean }>`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${(props) =>
    props.focus
      ? props.theme.colors.ui.primary
      : props.theme.colors.ui.disabled};

  padding: 12px 16px 12px 16px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

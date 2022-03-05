import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-left: 8px;
`;

export const Container = styled.View<{ focus: boolean }>`
  border-width: 1px;
  border-radius: ${({ theme }) => theme.radius[1]};
  border-color: ${(props) =>
    props.focus
      ? props.theme.colors.ui.primary
      : props.theme.colors.ui.disabled};

  padding: 12px 16px 12px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

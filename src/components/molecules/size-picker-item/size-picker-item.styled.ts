import styled from "styled-components/native";
import { Props } from "./size-picker-item.props";

export const StyledTouchableOpacity = styled.TouchableOpacity<{
  active: boolean;
}>`
  width: 48px;
  height: 48px;
  border-width: 1px;
  border-radius: 25px;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.ui.primary : theme.colors.ui.ghost};
  justify-content: center;
  align-items: center;
`;

import styled, { css } from "styled-components/native";
import { Props } from "./button.props";

export const StyledTouchableOpacity = styled.TouchableOpacity<Props>`
  ${({ theme, color = "primary" }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.radius[1]};
    padding: ${theme.sizes[1]}
      ${color === "primary" && `background-color: ${theme.colors.ui.primary}`};
    ${color === "ghost" && `border-width: 1px`};
    ${color === "ghost" && `border-color: ${theme.colors.ui.ghost}`}
  `}
`;

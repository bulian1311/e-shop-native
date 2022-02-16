import styled, { css } from "styled-components/native";
import { Props } from "./paragraph.props";

export const StyledText = styled.Text<Props>`
  ${({ theme, size = "body", color = "dark", weight = "regular" }) => css`
    color: ${theme.colors.text[color]};
    font-size: ${theme.fonts.size[size]};
    font-weight: ${theme.fonts.weight[weight]};
  `}
`;

import styled, { css } from "styled-components/native";
import { Props } from "./paragraph.props";

export const StyledText = styled.Text<Props>`
  ${({ theme, size = "body", color = "dark", weight = "regular" }) => css`
    font-family: ${theme.fonts.fonts.body};
    ${weight === "bold" && `font-family: ${theme.fonts.fonts.heading};`};
    color: ${theme.colors.text[color]};
    font-size: ${theme.fonts.size[size]};
  `}
`;

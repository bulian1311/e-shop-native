import styled, { css } from "styled-components/native";
import { Props } from "./headline.props";

export const StyledText = styled.Text<Props>`
  ${({ theme, size = "h1", color = "dark", weight = "bold" }) => css`
    font-family: ${theme.fonts.fonts.heading};
    ${weight === "medium" && `font-family: ${theme.fonts.fonts.subheading}`};
    ${weight === "regular" && `font-family: ${theme.fonts.fonts.body}`};
    color: ${theme.colors.text[color]};
    font-size: ${theme.fonts.size[size]};
  `}
`;

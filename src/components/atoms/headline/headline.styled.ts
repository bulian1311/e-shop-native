import styled, { css } from "styled-components/native";
import { Props } from "./headline.props";

export const StyledText = styled.Text<Props>`
  ${({ theme, size = "h1", color = "dark", weight = "medium" }) => css`
    color: ${theme.colors.text[color]};
    font-size: ${theme.fonts.size[size]};
    font-weight: ${theme.fonts.weight[weight]};
  `}
`;

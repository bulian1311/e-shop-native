import styled, { css } from "styled-components/native";
import { Props } from "./spacer.props";

const sizes = {
  extraSmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  extraLarge: 5,
};

const positions = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

export const StyledView = styled.View<Props>`
  ${({ pos = "top", size = "medium", theme }) => css`
    ${positions[pos]}: ${theme.spacing.space[sizes[size]]};
  `};
`;

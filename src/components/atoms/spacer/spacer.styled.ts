import styled, { css } from "styled-components/native";
import { Props } from "./spacer.props";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

export const StyledView = styled.View<Props>`
  ${({ pos = "top", size = "large", theme }) => css`
    ${positions[pos]}: ${theme.spacing.space[sizes[size]]};
  `};
`;

import styled, { css } from "styled-components/native";
import { Props } from "./product-item.props";

export const StyledView = styled.View<Props>`
  ${({ theme, size = "small" }) => css`
    border-width: 1px;
    ${size === "medium" && "flex-basis: 48%"};
    padding: ${size === "medium"
      ? theme.spacing.space[4]
      : theme.spacing.space[3]};
    border-radius: ${theme.radius[1]};
    border-color: ${theme.colors.ui.ghost};
  `};
`;

export const StyledImage = styled.Image<{ size?: "small" | "medium" }>`
  width: 100%;
  height: ${({ size = "small" }) => (size === "small" ? "90px" : "110px")};
`;

export const DiscountContainer = styled.View`
  flex-direction: row;
`;

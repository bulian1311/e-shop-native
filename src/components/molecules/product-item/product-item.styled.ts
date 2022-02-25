import styled, { css } from "styled-components/native";
import { Props } from "./product-item.props";

export const StyledView = styled.View<Props>`
  ${({ theme, size = "small" }) => css`
    border-width: 1px;
    padding: ${theme.spacing.space[3]};
    border-radius: ${theme.radius[1]};
    border-color: ${theme.colors.ui.ghost};
  `};
`;

export const StyledImage = styled.Image`
  width: 110px;
  height: 110px;
`;

export const DiscountContainer = styled.View`
  flex-direction: row;
`;

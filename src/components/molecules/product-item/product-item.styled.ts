import styled, { css } from "styled-components/native";

export const StyledView = styled.View<{ size: string | undefined }>`
  ${({ theme, size = "small" }) => css`
    border-width: 1px;
    ${size === "small" && "width: 140px"};
    ${size === "medium" && "flex-basis: 48%"};
    padding: ${size === "medium"
      ? theme.spacing.space[4]
      : theme.spacing.space[3]};
    border-radius: ${theme.radius[1]};
    border-color: ${theme.colors.ui.ghost};
  `};
`;

export const DiscountContainer = styled.View`
  flex-direction: row;
`;

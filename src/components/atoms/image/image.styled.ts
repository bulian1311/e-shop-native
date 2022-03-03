import styled, { css } from "styled-components/native";

export const StyledImageWrapper = styled.View<{ width?: number }>`
  ${({ theme }) => css`
    border-radius: ${theme.radius[1]};
    overflow: hidden;
  `}
`;

export const StyledImage = styled.Image<{ height: number; width?: number }>`
  ${({ width, height }) => css`
    width: ${width ? width + "px" : "100%"};
    height: ${height}px;
  `}
`;

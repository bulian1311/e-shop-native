import React from "react";
import { Props } from "./image.props";
import { StyledImage, StyledImageWrapper } from "./image.styled";

export const Image = ({ src, height, width }: Props) => {
  return (
    <StyledImageWrapper>
      <StyledImage
        width={width}
        height={height}
        style={{ resizeMode: "center" }}
        source={{ uri: src }}
      />
    </StyledImageWrapper>
  );
};

import React from "react";
import { Props } from "./container.props";
import { StyledContainer } from "./container.styled";

export const Container = ({ children, ...props }: Props) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

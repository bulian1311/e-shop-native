import React from "react";
import { Props } from "./headline.props";
import { StyledText } from "./headline.styled";

export const Headline = ({ children, ...props }: Props) => {
  return <StyledText {...props}>{children}</StyledText>;
};

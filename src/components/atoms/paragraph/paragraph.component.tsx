import React from "react";
import { Props } from "./paragraph.props";
import { StyledText } from "./paragraph.styled";

export const Paragraph = ({ children, ...props }: Props) => {
  return <StyledText {...props}>{children}</StyledText>;
};

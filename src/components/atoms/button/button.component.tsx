import React from "react";
import { Props } from "./button.props";
import { Paragraph } from "../paragraph";
import { StyledTouchableOpacity } from "./button.styled";

export const Button = ({ children, color, title, ...props }: Props) => {
  return (
    <StyledTouchableOpacity title={title} color={color} {...props}>
      {children}
      <Paragraph
        weight="bold"
        color={color === "primary" ? "light" : "disabled"}
        size="button"
      >
        {title}
      </Paragraph>
    </StyledTouchableOpacity>
  );
};

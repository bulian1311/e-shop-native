import React from "react";
import { Props } from "./button.props";
import { Paragraph } from "../paragraph";
import { StyledTouchableOpacity } from "./button.styled";

export const Button = ({
  children,
  title,
  color = "primary",
  ...props
}: Props) => {
  return (
    <StyledTouchableOpacity
      activeOpacity={0.6}
      title={title}
      color={color}
      {...props}
    >
      {title && (
        <Paragraph
          weight="bold"
          color={color === "primary" ? "light" : "disabled"}
          size="button"
        >
          {title}
        </Paragraph>
      )}
      {children}
    </StyledTouchableOpacity>
  );
};

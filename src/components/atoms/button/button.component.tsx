import React from "react";
import { Props } from "./button.props";
import { StyledView, StyledText } from "./button.styled";

export const Button = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Button</StyledText>
    </StyledView>
  );
};

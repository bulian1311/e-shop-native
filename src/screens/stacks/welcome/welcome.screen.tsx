import React from "react";
import { Props } from "./welcome.props";
import { StyledView, StyledText } from "./welcome.styled";

export const Welcome = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Welcome</StyledText>
    </StyledView>
  );
};

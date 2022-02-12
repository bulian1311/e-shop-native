import React from "react";
import { Props } from "./login.props";
import { StyledView, StyledText } from "./login.styled";

export const LoginScreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>LoginScreen</StyledText>
    </StyledView>
  );
};

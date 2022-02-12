import React from "react";
import { Props } from "./registration.props";
import { StyledView, StyledText } from "./registration.styled";

export const RegistrationScreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>RegistrationScreen</StyledText>
    </StyledView>
  );
};

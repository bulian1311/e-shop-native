import React from "react";
import { Props } from "./account.props";
import { StyledView, StyledText } from "./account.styled";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>AccountScreen</StyledText>
    </StyledView>
  );
};

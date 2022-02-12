import React from "react";
import { Props } from "./qq.props";
import { StyledView, StyledText } from "./qq.styled";

export const QQ = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>QQ</StyledText>
    </StyledView>
  );
};

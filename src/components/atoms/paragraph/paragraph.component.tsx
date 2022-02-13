import React from "react";
import { Props } from "./paragraph.props";
import { StyledView, StyledText } from "./paragraph.styled";

export const Paragraph = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Paragraph</StyledText>
    </StyledView>
  );
};

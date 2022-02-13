import React from "react";
import { Props } from "./headline.props";
import { StyledView, StyledText } from "./headline.styled";

export const Headline = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Headline</StyledText>
    </StyledView>
  );
};

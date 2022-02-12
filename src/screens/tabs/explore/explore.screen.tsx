import React from "react";
import { Props } from "./explore.props";
import { StyledView, StyledText } from "./explore.styled";

export const ExploreEcreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Explore</StyledText>
    </StyledView>
  );
};

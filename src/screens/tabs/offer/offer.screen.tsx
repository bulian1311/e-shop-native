import React from "react";
import { Props } from "./offer.props";
import { StyledView, StyledText } from "./offer.styled";

export const OfferScreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>OfferScreen</StyledText>
    </StyledView>
  );
};

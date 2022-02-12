import React from "react";
import { Props } from "./cart.props";
import { StyledView, StyledText } from "./cart.styled";

export const CartScreen = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>Cart</StyledText>
    </StyledView>
  );
};

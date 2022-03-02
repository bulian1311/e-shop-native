import React from "react";
import { Props } from "./cart-item.props";
import { StyledView, StyledText } from "./cart-item.styled";

export const CartItem = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>CartItem</StyledText>
    </StyledView>
  );
};

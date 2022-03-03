import React from "react";
import { Props } from "./cart-list.props";
import { StyledView, StyledText } from "./cart-list.styled";

export const CartList = ({ ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledText>CartList</StyledText>
    </StyledView>
  );
};

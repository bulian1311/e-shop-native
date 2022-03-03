import React from "react";
import { Props } from "./cart.props";
import { LayoutSearch } from "../../../components";
import { StyledView, StyledText } from "./cart.styled";

export const CartScreen = ({ ...props }: Props) => {
  return (
    <LayoutSearch {...props}>
      <StyledText>Cart</StyledText>
    </LayoutSearch>
  );
};

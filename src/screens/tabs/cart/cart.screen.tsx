import React from "react";
import { Props } from "./cart.props";
import { TabLayout } from "../../../components";
import { StyledView, StyledText } from "./cart.styled";

export const CartScreen = ({ ...props }: Props) => {
  return (
    <TabLayout {...props}>
      <StyledText>Cart</StyledText>
    </TabLayout>
  );
};

import React from "react";
import { LayoutTitle, Spacer, CartList } from "../../../components";

export const CartScreen = () => {
  return (
    <LayoutTitle title="Product Cart">
      <Spacer />
      <CartList />
    </LayoutTitle>
  );
};

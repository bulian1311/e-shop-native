import React from "react";
import {
  LayoutTitle,
  Spacer,
  Button,
  CartList,
  CartInfo,
} from "../../../components";

export const CartScreen = () => {
  return (
    <LayoutTitle title="Product Cart">
      <Spacer />

      <CartList />

      <Spacer />

      <CartInfo />

      <Spacer size="large" />

      <Button title="Check Out" />

      <Spacer size="large" />
    </LayoutTitle>
  );
};

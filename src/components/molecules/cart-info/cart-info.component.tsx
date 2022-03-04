import React from "react";
import { Paragraph } from "../../atoms";
import { StyledView, StyledCartInfoWrapper } from "./cart-info.styled";

export const CartInfo = () => {
  return (
    <StyledCartInfoWrapper>
      <StyledView>
        <Paragraph color="disabled">Items (3)</Paragraph>
        <Paragraph>29.99</Paragraph>
      </StyledView>
      <StyledView>
        <Paragraph color="disabled">Shipping</Paragraph>
        <Paragraph>69.99</Paragraph>
      </StyledView>
      <StyledView>
        <Paragraph color="disabled">Import charges</Paragraph>
        <Paragraph>30.50</Paragraph>
      </StyledView>
      <StyledView>
        <Paragraph weight="bold">Total Price</Paragraph>
        <Paragraph color="primary" weight="bold">
          123.99
        </Paragraph>
      </StyledView>
    </StyledCartInfoWrapper>
  );
};

import React from "react";
import { Paragraph, Headline, Spacer } from "../../atoms";
import { Props } from "./product-item.props";
import {
  StyledView,
  StyledImage,
  DiscountContainer,
} from "./product-item.styled";

let img =
  "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp";

export const ProductItem = ({ product, ...props }: Props) => {
  return (
    <StyledView {...props}>
      <StyledImage source={{ uri: img }} />
      <Spacer pos="top" size="medium" />
      <Headline size="h4">{product.title}</Headline>
      <Spacer pos="top" size="medium" />
      <Headline size="h4" color="primary">
        {product.price}
      </Headline>
      <Spacer pos="top" size="medium" />
      <DiscountContainer>
        <Paragraph
          color="disabled"
          style={{ textDecorationLine: "line-through" }}
        >
          59.99
        </Paragraph>
        <Spacer pos="left" size="medium" />
        <Paragraph weight="bold" color="danger">
          10% Off
        </Paragraph>
      </DiscountContainer>
    </StyledView>
  );
};

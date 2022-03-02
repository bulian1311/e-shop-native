import React from "react";
import { Paragraph, Headline, Rating, Spacer } from "../../atoms";
import { TrashIcon, HeartIcon } from "../../atoms/icons";
import { NavLink } from "../nav-link";
import { Props } from "./product-item.props";
import {
  StyledView,
  StyledImage,
  DiscountContainer,
} from "./product-item.styled";

let img =
  "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp";

export const ProductItem = ({ size, product, action, ...props }: Props) => {
  return (
    <StyledView size={size} product={product} {...props}>
      <NavLink navigateTo="Details" params={{ productId: product.id }}>
        <StyledImage
          style={{ resizeMode: "contain" }}
          size={size}
          source={{ uri: img }}
        />

        <Spacer pos="top" size="small" />

        <Headline size="h4">{product.title}</Headline>
      </NavLink>

      <Spacer pos="top" size="small" />

      {size === "medium" && (
        <>
          <Rating rating={4} />
          <Spacer pos="top" size="small" />
        </>
      )}

      <Headline size="h4" color="primary">
        {product.price}
      </Headline>

      <Spacer pos="top" size="small" />

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

        {action === "add-favorite" && (
          <>
            <Spacer pos="left" size="large" />
            <HeartIcon />
          </>
        )}
        {action === "delete-favorite" && (
          <>
            <Spacer pos="left" size="large" />
            <TrashIcon />
          </>
        )}
      </DiscountContainer>
    </StyledView>
  );
};

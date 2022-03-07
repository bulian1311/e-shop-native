import React from "react";
import { Paragraph, Headline, Rating, Spacer, Image } from "../../atoms";
import { TrashIcon, HeartIcon } from "../../atoms/icons";
import { NavLink } from "../nav-link";
import { Props } from "./product-item.props";
import { StyledView, DiscountContainer } from "./product-item.styled";

export const ProductItem = ({ size, product, action, ...props }: Props) => {
  const title: string = `${product.title.substring(0, 30)}...`;

  return (
    <StyledView size={size} {...props}>
      <NavLink navigateTo="Details" params={{ productId: product.id }}>
        <Image
          height={size === "small" ? 90 : 110}
          src={product.featuredImage.url}
        />

        <Spacer pos="top" size="small" />

        <Headline size="h4">{title}</Headline>
      </NavLink>

      <Spacer pos="top" size="small" />

      {size === "medium" && (
        <>
          <Rating rating={4} />
          <Spacer pos="top" size="small" />
        </>
      )}

      <Headline size="h4" color="primary">
        {29.99}
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

import React from "react";
import { Spacer } from "../../atoms";
import { ListHorizontal, ProductItem } from "../../molecules";

const products = [
  { id: "qweqweqwe1", title: "Phone dexp 1", price: 29.99 },
  { id: "qweqweqwe2", title: "Phone dexp 2", price: 29.99 },
  { id: "qweqweqwe3", title: "Phone dexp 3", price: 29.99 },
  { id: "qweqweqwe4", title: "Phone dexp 4", price: 29.99 },
  { id: "qweqweqwe5", title: "Phone dexp 5", price: 29.99 },
  { id: "qweqweqwe6", title: "Phone dexp 6", price: 29.99 },
  { id: "qweqweqwe7", title: "Phone dexp 7", price: 29.99 },
  { id: "qweqweqwe8", title: "Phone dexp 8", price: 29.99 },
];

export const RecomendedProducts = () => {
  return (
    <ListHorizontal
      data={products}
      keyExtractor={(product: any) => product.id}
      renderItem={({ item, index }) => (
        <>
          {index > 0 && <Spacer pos="left" size="large" />}
          <ProductItem product={item} />
        </>
      )}
      title="You Might Also Like"
    />
  );
};

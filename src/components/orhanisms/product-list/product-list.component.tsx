import React from "react";
import { ProductItem, ListVertical } from "../../molecules";

const products = [
  { id: "qweqweqwe1", title: "Phone dexp 1", price: 29.99 },
  { id: "qweqweqwe2", title: "Phone dexp 2", price: 29.99 },
  { id: "qweqweqwe3", title: "Phone dexp 3", price: 29.99 },
  { id: "qweqweqwe4", title: "Phone dexp 4", price: 29.99 },
];

export const ProductList = () => {
  return (
    <ListVertical
      data={products}
      renderItem={({ item }) => <ProductItem size="medium" product={item} />}
      keyExtractor={(item: any) => item.id}
    />
  );
};

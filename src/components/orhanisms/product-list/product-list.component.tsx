import React from "react";

import { ProductItem, ListVertical } from "../../molecules";
import { Props } from "./product-list.props";

const products = [
  { id: "qweqweqwe1", title: "Phone dexp 1", price: 29.99 },
  { id: "qweqweqwe2", title: "Phone dexp 2", price: 29.99 },
  { id: "qweqweqwe3", title: "Phone dexp 3", price: 29.99 },
  { id: "qweqweqwe4", title: "Phone dexp 4", price: 29.99 },
];

export const ProductList = ({
  onScroll,
  contentContainerStyle,
  columnWrapperStyle,
  listHeaderComponent,
  listFooterComponent,
}: Props) => {
  return (
    <ListVertical
      onScroll={onScroll}
      ListHeaderComponent={listHeaderComponent}
      ListFooterComponent={listFooterComponent}
      data={products}
      renderItem={({ item }) => <ProductItem size="medium" product={item} />}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
    />
  );
};

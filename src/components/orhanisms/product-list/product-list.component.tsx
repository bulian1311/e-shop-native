import React from "react";
import { useQuery } from "graphql-hooks";
import { ProductItem, ListVertical } from "../../molecules";
import { Props } from "./product-list.props";
import { query, queryOptions } from "./product-list.graphql";

const products = [
  {
    node: {
      id: "qweqweqwe1",
      title: "Phone dexp 1",
      price: 29.99,
      featuredImage: {
        url: "https://cdn.shopify.com/s/files/1/0626/7306/0077/products/Image.png?v=1644229648",
      },
    },
  },
  {
    node: {
      id: "qweqweqwe1",
      title: "Phone dexp 1",
      price: 29.99,
      featuredImage: {
        url: "https://cdn.shopify.com/s/files/1/0626/7306/0077/products/Image.png?v=1644229648",
      },
    },
  },
];

export const ProductList = ({
  onScroll,
  contentContainerStyle,
  columnWrapperStyle,
  listHeaderComponent,
  listFooterComponent,
  productAction,
}: Props) => {
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  const renderItem = ({ item }: any) => (
    <ProductItem size="medium" product={item.node} action={productAction} />
  );

  return (
    <ListVertical
      onScroll={onScroll}
      ListHeaderComponent={listHeaderComponent}
      ListFooterComponent={listFooterComponent}
      data={products}
      renderItem={renderItem}
      keyExtractor={(product: any) => product.node.id}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
    />
  );
};

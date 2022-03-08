import React from "react";
import { useQuery } from "graphql-hooks";
import { ProductItem, ListVertical } from "../../molecules";
import { Props } from "./product-list.props";
import { query, queryOptions } from "./product-list.graphql";

export const ProductList = ({
  onScroll,
  contentContainerStyle,
  columnWrapperStyle,
  listHeaderComponent,
  listFooterComponent,
  productAction,
}: Props) => {
  const { loading, error, data } = useQuery(query, queryOptions);

  const renderItem = ({ item }: any) => (
    <ProductItem size="medium" product={item.node} action={productAction} />
  );

  return (
    <ListVertical
      onScroll={onScroll}
      ListHeaderComponent={listHeaderComponent}
      ListFooterComponent={listFooterComponent}
      data={loading ? [] : data.products.edges}
      renderItem={renderItem}
      keyExtractor={(product: any) => product.node.id}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
    />
  );
};

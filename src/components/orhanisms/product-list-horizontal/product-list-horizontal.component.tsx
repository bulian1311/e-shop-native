import React from "react";
import { useQuery } from "graphql-hooks";
import { Paragraph, Spacer } from "../../atoms";
import { ListHorizontal, ProductItem } from "../../molecules";
import { Props } from "./product-list-horizontal.props";
import { query, queryOptions } from "./product-list-horizontal.graphql";

export const ProductListHorizontal = ({
  title = "Sale",
  navigateTo,
  first = 5,
  handle = "frontpage",
}: Props) => {
  const { loading, error, data } = useQuery(query, queryOptions(first, handle));

  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <ListHorizontal
      data={data.collection.products.edges}
      keyExtractor={(item: any) => item.node.id}
      renderItem={({ item, index }: any) => (
        <>
          {index > 0 && <Spacer pos="left" size="large" />}
          <ProductItem product={item.node} />
        </>
      )}
      title={title}
      navigateTo={navigateTo}
    />
  );
};

import React from "react";
import { useQuery } from "graphql-hooks";
import { Paragraph, Spacer } from "../../atoms";
import { ListHorizontal, ProductItem } from "../../molecules";
import { query, queryOptions } from "./flash-sale.graphql";

export const FlashSale = () => {
  const { loading, error, data } = useQuery(query, queryOptions);

  if (loading) {
    return <Paragraph>Loading</Paragraph>;
  }

  return (
    <ListHorizontal
      data={data.products.edges}
      keyExtractor={(item: any) => item.node.id}
      renderItem={({ item, index }: any) => (
        <>
          {index > 0 && <Spacer pos="left" size="large" />}
          <ProductItem product={item.node} />
        </>
      )}
      title="Flash Sale"
      navigateTo="Home"
    />
  );
};

import React from "react";
import { useQuery } from "graphql-hooks";
import { Paragraph, Spacer } from "../../atoms";
import { ListHorizontal, ProductItem } from "../../molecules";
import { query, queryOptions } from "./mega-sale.graphql";

export const MegaSale = () => {
  const { loading, error, data } = useQuery(query, queryOptions);

  if (loading) {
    return <Paragraph>Loading</Paragraph>;
  }

  return (
    <ListHorizontal
      data={data.products.edges}
      keyExtractor={(product: any) => product.node.id}
      renderItem={({ item, index }: any) => (
        <>
          {index > 0 && <Spacer pos="left" size="large" />}
          <ProductItem product={item.node} />
        </>
      )}
      title="Mega Sale"
      navigateTo="Home"
    />
  );
};

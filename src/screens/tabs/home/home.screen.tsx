import React from "react";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.graphql";
import {
  TabLayout,
  Hero,
  Spacer,
  Carousel,
  CategoryListHorizontal,
  FlashSale,
  MegaSale,
  ProductList,
} from "../../../components";

export const HomeScreen = () => {
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  return (
    <TabLayout>
      <Spacer pos="top" size="large" />

      <Carousel
        marginX={16}
        items={[
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
          <Hero
            title="Recomended products"
            description="We recommend the best for you"
          />,
        ]}
      />

      <Spacer pos="top" size="large" />

      <CategoryListHorizontal />

      <Spacer pos="top" size="large" />

      <FlashSale />

      <Spacer pos="top" size="large" />

      <MegaSale />

      <Spacer pos="top" size="large" />

      <Hero
        title="Recomended products"
        description="We recommend the best for you"
      />

      <Spacer pos="top" size="large" />

      <ProductList />

      <Spacer pos="top" size="large" />
    </TabLayout>
  );
};

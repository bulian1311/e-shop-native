import React from "react";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.graphql";
import { TabLayout, Hero, Spacer, Carousel } from "../../../components";

export const HomeScreen = () => {
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  return (
    <TabLayout>
      <Spacer pos="top" size="large" />

      <Carousel
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
        isPlaying
      />
      <Spacer pos="top" size="large" />
      <Hero
        title="Recomended products"
        description="We recommend the best for you"
      />
    </TabLayout>
  );
};

import React from "react";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.graphql";
import {
  TabLayout,
  Hero,
  Spacer,
  Carousel,
  CategoryListHorizontal,
} from "../../../components";

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
      <CategoryListHorizontal
        categories={[
          { name: "Category 1", id: "sdfsdgsfadasd1" },
          { name: "Category 2", id: "sdfsdgsfadasd2" },
          { name: "Category 3", id: "sdfsdgsfadasd3" },
          { name: "Category 4", id: "sdfsdgsfadasd4" },
          { name: "Category 5", id: "sdfsdgsfadasd5" },
          { name: "Category 6", id: "sdfsdgsfadasd6" },
          { name: "Category 7", id: "sdfsdgsfadasd7" },
          { name: "Category 8", id: "sdfsdgsfadasd8" },
        ]}
      />
      <Spacer pos="top" size="large" />
      <Hero
        title="Recomended products"
        description="We recommend the best for you"
      />
    </TabLayout>
  );
};

import React from "react";
import { Spacer } from "../../atoms";
import { Hero } from "../../molecules";
import {
  Carousel,
  ProductListHorizontal,
  CategoryListHorizontal,
} from "../../orhanisms";

export const HomeHeader = () => {
  return (
    <React.Fragment>
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

      <ProductListHorizontal
        title="Flash Sale"
        handle="frontpage"
        navigateTo="Home"
      />

      <Spacer pos="top" size="large" />

      <ProductListHorizontal
        title="Mega Sale"
        handle="frontpage"
        navigateTo="Home"
      />

      <Spacer pos="top" size="large" />

      <Hero
        title="Recomended products"
        description="We recommend the best for you"
      />

      <Spacer pos="top" size="large" />
    </React.Fragment>
  );
};

import React from "react";
import { Spacer } from "../../atoms";
import { Hero } from "../../molecules";
import {
  Carousel,
  FlashSale,
  MegaSale,
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

      <FlashSale />

      <Spacer pos="top" size="large" />

      <MegaSale />

      <Spacer pos="top" size="large" />

      <Hero
        title="Recomended products"
        description="We recommend the best for you"
      />

      <Spacer pos="top" size="large" />
    </React.Fragment>
  );
};

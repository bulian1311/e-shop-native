import React, { useRef } from "react";
import { Animated } from "react-native";
import { ProductList, TopBarBack } from "../../../components";
import { Container, AnimatedScrollY } from "../../../containers";

export const FavoritesScreen = () => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <>
      <AnimatedScrollY ref={scrollY}>
        <TopBarBack title="Favorite Product" />
      </AnimatedScrollY>
      <Container>
        <ProductList
          contentContainerStyle={{ paddingTop: 70 }}
          productAction="delete-favorite"
        />
      </Container>
    </>
  );
};

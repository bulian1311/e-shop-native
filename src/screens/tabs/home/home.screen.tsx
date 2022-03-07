import React, { useRef } from "react";
import { Animated } from "react-native";
import { Container, AnimatedScrollY } from "../../../containers";
import {
  HomeHeader,
  TopBarSearch,
  Spacer,
  ProductList,
} from "../../../components";

export const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <TopBarSearch />
      </AnimatedScrollY>

      <ProductList
        onScroll={(e) => {
          scrollY.current.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{ paddingTop: 90 }}
        listHeaderComponent={<HomeHeader />}
        listFooterComponent={<Spacer pos="top" size="medium" />}
        productAction="add-favorite"
      />
    </Container>
  );
};

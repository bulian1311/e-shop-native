import React, { useRef } from "react";
import { useQuery } from "graphql-hooks";
import { Animated } from "react-native";
import { query, queryOptions } from "./home.graphql";
import { Container, AnimatedScrollY } from "../../../containers";
import {
  HomeHeader,
  TopBarSearch,
  Spacer,
  ProductList,
} from "../../../components";

export const HomeScreen = () => {
  const { loading, error, data } = useQuery(query, queryOptions);
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <Spacer />
        <TopBarSearch />
      </AnimatedScrollY>

      <ProductList
        onScroll={(e) => {
          scrollY.current.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{ paddingTop: 90 }}
        listHeaderComponent={<HomeHeader />}
        listFooterComponent={<Spacer pos="top" size="medium" />}
      />
    </Container>
  );
};

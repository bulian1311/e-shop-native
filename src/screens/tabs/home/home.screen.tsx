import React, { useRef } from "react";
import { useQuery } from "graphql-hooks";
import { useTheme } from "styled-components/native";
import { Animated } from "react-native";
import { query, queryOptions } from "./home.graphql";
import { Container } from "../../../containers";
import {
  HomeHeader,
  TopBarSearch,
  Spacer,
  ProductList,
} from "../../../components";

export const HomeScreen = () => {
  const { loading, error, data } = useQuery(query, queryOptions);
  const theme = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = useRef(Animated.diffClamp(scrollY, 0, 90)).current;
  const translateY = diffClampScrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -12],
  });
  const opacity = diffClampScrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
  });

  return (
    <Container>
      <Animated.View
        nativeID="1"
        style={{
          transform: [{ translateY }],
          width: "100%",
          position: "absolute",
          top: 0,
          left: 16,
          zIndex: 100,
          paddingTop: 30,
          backgroundColor: theme.colors.bg.primary,
        }}
      >
        <Spacer />
        <TopBarSearch nativeID="2" />
      </Animated.View>

      <ProductList
        style={{ paddingTop: 90 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        listHeaderComponent={<HomeHeader />}
        listFooterComponent={<Spacer pos="top" size="medium" />}
      />
    </Container>
  );
};

import React from "react";
import { View, Text } from "react-native";
import { PropTypes } from "./product-card.types";
import { Rating } from "../../atoms";

export const ProductCard = (props: PropTypes) => {
  return (
    <View>
      <Text>Product card</Text>
      <Rating rating={3} />
    </View>
  );
};

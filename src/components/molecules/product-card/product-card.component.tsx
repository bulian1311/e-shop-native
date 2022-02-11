import React from "react";
import { View, Text } from "react-native";
import { Props } from "./product-card.props";
import { Rating } from "../../atoms";

export const ProductCard = ({ ...props }: Props) => {
  return (
    <View {...props}>
      <Text>Product card</Text>
      <Rating rating={3} />
    </View>
  );
};

import React from "react";
import { useRoute } from "@react-navigation/native";
import { StackLayout, Paragraph } from "../../../components";

export const ProductDetailsScreen = () => {
  const { params } = useRoute();

  console.log(params);

  return (
    <StackLayout>
      <Paragraph>DetailsScreen</Paragraph>
    </StackLayout>
  );
};

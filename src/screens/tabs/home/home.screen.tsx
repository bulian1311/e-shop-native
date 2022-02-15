import React from "react";
import { SearchField, ProductList } from "../../../components";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.graphql";
import { useNavigation } from "@react-navigation/native";
import { Container, Hero } from "../../../components";

export const HomeScreen = () => {
  const navigation: any = useNavigation();
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  return (
    <Container>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate({ name: "Details" })}
      /> */}
      <SearchField with="favorites" />
      <Hero />

      <ProductList />
    </Container>
  );
};

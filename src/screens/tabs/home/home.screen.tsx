import React from "react";
import { StyleSheet, Button, SafeAreaView } from "react-native";
import { ProductList } from "../../../components";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.query";
import { useNavigation } from "@react-navigation/native";

import {
  HeartIcon,
  BellIcon,
  SearchIcon,
  ArrowIcon,
  TrashIcon,
  CartIcon,
  HomeIcon,
  OfferIcon,
  AccountIcon,
} from "../../../components/atoms/icons";

export const HomeScreen = () => {
  const navigation: any = useNavigation();
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate({ name: "Details" })}
      />
      <HeartIcon stroke="blue" />
      <BellIcon fill="blue" />
      <SearchIcon stroke="blue" />
      <ArrowIcon stroke="blue" />
      <TrashIcon stroke="blue" />
      <CartIcon stroke="blue" />
      <HomeIcon stroke="blue" />
      <OfferIcon stroke="blue" />
      <AccountIcon fill="blue" />
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

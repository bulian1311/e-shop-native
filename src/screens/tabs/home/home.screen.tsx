import React from "react";
import {
  StatusBar,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { ProductList } from "../../../components";
import { useQuery } from "graphql-hooks";
import { query, queryOptions } from "./home.query";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation: any = useNavigation();
  const { loading, error, data } = useQuery(query, queryOptions);

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar testID="" value="" autoComplete={"true"} />
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate({ name: "Details" })}
      />
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
});

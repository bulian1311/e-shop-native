import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { ProductItem } from "../../molecules";

export const ProductList = () => {
  return (
    <View style={styles.list}>
      <Text>qqq list</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={(product) => <ProductItem product={product} />}
        keyExtractor={(it, i) => `qq ${i + it}`}
        scrollEnabled={false}
        // numColumns={2}
        //horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: { padding: 16, backgroundColor: "blue", flex: 1 },
});

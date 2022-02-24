import React from "react";
import { StyledFlatList } from "./product-lisr.styled";
import { ProductItem } from "../../molecules";
import { Props } from "./product-list.props";

const products = [
  { id: "qweqweqwe1", title: "Phone dexp 1", price: 29.99 },
  { id: "qweqweqwe2", title: "Phone dexp 2", price: 29.99 },
  { id: "qweqweqwe3", title: "Phone dexp 3", price: 29.99 },
  { id: "qweqweqwe4", title: "Phone dexp 4", price: 29.99 },
];

export const ProductList = ({ ...props }: Props) => {
  return (
    <StyledFlatList
      {...props}
      data={products}
      renderItem={({ item }) => <ProductItem size="medium" product={item} />}
      keyExtractor={(item: any) => item.id}
      // scrollEnabled={false}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={4} //render only 4 items per scroll.
      columnWrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    />
  );
};

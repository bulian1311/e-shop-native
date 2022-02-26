import React from "react";
import { Props } from "./list-vertical.props";
import { StyledFlatList } from "./list-vertical.styled";

export const ListVertical = ({ ...props }: Props) => {
  return (
    <StyledFlatList
      {...props}
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

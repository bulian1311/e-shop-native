import React from "react";
import { CategoryItem, ListHorizontal } from "../../molecules";
import { Props } from "./category-list-horizontal.props";

export const CategoryListHorizontal = ({ categories, ...props }: Props) => {
  return (
    <ListHorizontal title="Categories" navigateTo="Categories">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ListHorizontal>
  );
};

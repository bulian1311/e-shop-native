import React from "react";
import { CategoryItem, ListHorizontal } from "../../molecules";
import { Props } from "./category-list-horizontal.props";

const categories = [
  { name: "Category 1", id: "sdfsdgsfadasd1" },
  { name: "Category 2", id: "sdfsdgsfadasd2" },
  { name: "Category 3", id: "sdfsdgsfadasd3" },
  { name: "Category 4", id: "sdfsdgsfadasd4" },
  { name: "Category 5", id: "sdfsdgsfadasd5" },
  { name: "Category 6", id: "sdfsdgsfadasd6" },
  { name: "Category 7", id: "sdfsdgsfadasd7" },
  { name: "Category 8", id: "sdfsdgsfadasd8" },
];

export const CategoryListHorizontal = () => {
  return (
    <ListHorizontal
      data={categories}
      keyExtractor={(category: any) => category.id}
      renderItem={(category) => <CategoryItem category={category} />}
      title="Categories"
      navigateTo="Categories"
    />
  );
};

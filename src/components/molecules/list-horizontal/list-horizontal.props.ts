import { ComponentProps } from "react";
import { FlatList } from "react-native";

export type Props = ComponentProps<typeof FlatList> & {
  title: string;
  navigateTo: string;
};

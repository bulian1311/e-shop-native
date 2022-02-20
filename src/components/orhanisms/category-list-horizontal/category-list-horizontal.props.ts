import { ComponentProps } from "react";
import { ScrollView } from "react-native";

export type Props = ComponentProps<typeof ScrollView> & {
  title?: string;
  categories: { name: string; id: string }[];
};

import { ComponentProps } from "react";
import { Text } from "react-native";

export type Props = ComponentProps<typeof Text> & {
  title?: string;
  navigateTo: string;
  params?: any;
};

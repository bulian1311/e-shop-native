import { ComponentProps } from "react";
import { View } from "react-native";

export type Props = ComponentProps<typeof View> & {
  product: any;
  size?: "small" | "medium";
  withTrash?: boolean;
};

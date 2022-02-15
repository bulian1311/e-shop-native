import { ComponentProps } from "react";
import { View } from "react-native";

export type Props = ComponentProps<typeof View> & {
  position: "top" | "right" | "bottom" | "left";
  size: "small" | "medium" | "large";
};

import { ComponentProps } from "react";
import { Text } from "react-native";

export type Props = ComponentProps<typeof Text> & {
  color: "dark" | "light" | "prymary" | "danger";
  size: "h1" | "h2" | "h3" | "h4" | "h5";
};

import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

export type Props = ComponentProps<typeof TouchableOpacity> & {
  title?: string;
  color?: "primary" | "ghost";
};

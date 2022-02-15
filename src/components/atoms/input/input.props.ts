import { ComponentProps } from "react";
import { TextInput } from "react-native";

export type Props = ComponentProps<typeof TextInput> & {
  icon: "search" | "mail" | "lock" | "account";
};

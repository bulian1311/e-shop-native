import { ComponentProps, Dispatch, SetStateAction } from "react";
import { View } from "react-native";

export type Props = ComponentProps<typeof View> & {
  color: string;
  active: boolean;
  setActive: () => void;
};

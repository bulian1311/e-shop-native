import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

export type Props = {
  style?: StyleProp<ViewStyle>;
  listHeaderComponent?: React.ReactElement;
  listFooterComponent?: React.ReactElement;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

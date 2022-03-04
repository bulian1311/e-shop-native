import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const AddresIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#40BFFF" {...props}>
    <Path
      d="M19 9.777C19 14.075 11.5 22 11.5 22S4 14.074 4 9.777C4 5.481 7.357 2 11.5 2S19 5.482 19 9.777Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M13.5 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </Svg>
);

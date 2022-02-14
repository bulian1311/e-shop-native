import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const CartIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#9098B1" {...props}>
    <Path
      d="M9.188 21a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.125ZM17.063 21a.562.562 0 1 0 0-1.125.562.562 0 0 0 0 1.125Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 3h2.25L7.5 16.5h11.25L21 6.375H6.375"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const SearchIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#9098B1" {...props}>
    <Path
      d="M10.875 18.75a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Z"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M16.5 16.5 21 21"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);

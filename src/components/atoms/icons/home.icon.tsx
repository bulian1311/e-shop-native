import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const HomeIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#9098B1" {...props}>
    <Path
      d="M3 9.75 12 3l9 6.75M21 9.75V21H3V9.75"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.25 14.25h-4.5V21h4.5v-6.75Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

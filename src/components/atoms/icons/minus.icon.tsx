import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const MinusIcon = ({ ...props }: Props) => (
  <Svg stroke="#9098B1" width={16} height={16} fill="none" {...props}>
    <Path
      d="M3.333 8h9.334"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const PlusIcon = ({ ...props }: Props) => (
  <Svg width={16} height={16} stroke="#9098B1" fill="none" {...props}>
    <Path
      d="M8 3.333v9.334M3.333 8h9.334"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

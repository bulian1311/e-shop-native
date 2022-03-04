import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const ArrowRightIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} stroke="#9098B1" fill="none" {...props}>
    <Path
      d="m9 6 6 6-6 6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

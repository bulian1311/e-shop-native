import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const CelendarIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#40BFFF" {...props}>
    <Path
      d="M3 10.875h18M16.5 7.5V3m-9 4.5V3M3 5.25h18V21H3V5.25Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

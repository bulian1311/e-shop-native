import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const OrderIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} stroke="#40BFFF" fill="none" {...props}>
    <Path
      d="M21 6.177H3V21h18V6.177ZM21 6.177H3L5.117 3h13.766L21 6.177Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.383 10.677a2.382 2.382 0 0 1-4.763 0"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

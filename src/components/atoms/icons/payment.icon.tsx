import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const PaymentIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} stroke="#40BFFF" fill="none" {...props}>
    <Path
      d="M21 5.25H3v13.5h18V5.25ZM3 9.75h18"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

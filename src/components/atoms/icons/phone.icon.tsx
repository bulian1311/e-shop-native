import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const PhoneIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#40BFFF" {...props}>
    <Path
      d="M17.625 3H6.375v18h11.25V3ZM11.994 17.625h.012"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

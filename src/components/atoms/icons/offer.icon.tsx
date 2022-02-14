import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const OfferIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#9098B1" {...props}>
    <Path
      d="M8.063 8.625a.563.563 0 1 0 0-1.125.563.563 0 0 0 0 1.125Z"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21 13-8 8L3 11V3h8l10 10Z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

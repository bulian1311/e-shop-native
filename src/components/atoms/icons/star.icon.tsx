import React, { ComponentProps } from "react";
import { Path, Svg } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const StarIcon = ({ ...props }: Props) => (
  <Svg
    width={12}
    height={11}
    fill="#EBF0FF"
    //xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m6 0 1.996 3.253 3.71.893L9.23 7.049l.297 3.805L6 9.396l-3.527 1.458.297-3.805L.294 4.146l3.71-.893L6 0Z" />
  </Svg>
);

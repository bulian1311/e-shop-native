import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const AccountIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="#9098B1" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a2.902 2.902 0 1 0 0 5.805A2.902 2.902 0 0 0 12 4ZM7.098 6.903a4.902 4.902 0 1 1 9.804 0 4.902 4.902 0 0 1-9.804 0ZM9.518 15.39A5.518 5.518 0 0 0 4 20.908V21a1 1 0 1 1-2 0v-.09a7.518 7.518 0 0 1 7.518-7.519h4.964A7.518 7.518 0 0 1 22 20.908V21a1 1 0 1 1-2 0v-.09a5.518 5.518 0 0 0-5.518-5.519H9.518Z"
    />
  </Svg>
);

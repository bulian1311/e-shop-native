import React, { ComponentProps } from "react";
import Svg, { Path, Rect } from "react-native-svg";

type Props = ComponentProps<typeof Svg> & {
  rectFill?: string;
  pathFill?: string;
};

export const LogoIcon = ({ rectFill, pathFill, ...props }: Props) => (
  <Svg width={72} height={72} {...props}>
    <Rect width={72} height={72} rx={16} fill={rectFill || "#40BFFF"} />
    <Path
      fill={pathFill || "#fff"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.828 33.172a4 4 0 0 1 0 5.656l-12 12a4 4 0 0 1-5.656 0l-12-12a4 4 0 0 1 0-5.656l12-12a4 4 0 0 1 5.656 0l12 12ZM36 29.657 29.657 36 36 42.343 42.343 36 36 29.657Z"
    />
  </Svg>
);

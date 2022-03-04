import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const FmaleIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} stroke="#40BFFF" fill="none" {...props}>
    <Path
      d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14v8M9 18h6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const HeartIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="none" stroke="#9098B1" {...props}>
    <Path
      d="M4.545 12.775 12 20.063l7.455-7.288.04-.039a5.068 5.068 0 0 0 0-7.288c-2.06-2.013-5.395-2.014-7.455 0l-.04.04-.041-.04c-2.061-2.015-5.396-2.015-7.455 0a5.069 5.069 0 0 0 0 7.287l.04.04Z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

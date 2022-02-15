import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const MailIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="#9098B1" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5.25a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.25Zm2 1v11.5h16V6.25H4Z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.24 4.6a1 1 0 0 1 1.41-.11L12 11.648l8.35-7.156a1 1 0 0 1 1.3 1.518l-9 7.714a1 1 0 0 1-1.3 0l-9-7.714a1 1 0 0 1-.11-1.41Z"
    />
  </Svg>
);

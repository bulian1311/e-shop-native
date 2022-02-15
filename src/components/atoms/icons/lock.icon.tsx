import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const LockIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="#9098B1" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9.75a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.75Zm2 1V20h16v-9.25H4Z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C9.481 4 7.375 6.132 7.375 8.841a1 1 0 0 1-2 0C5.375 5.099 8.306 2 12 2s6.625 3.1 6.625 6.841a1 1 0 1 1-2 0C16.625 6.132 14.519 4 12 4ZM12 13.726a1 1 0 0 1 1 1v1.125a1 1 0 1 1-2 0v-1.125a1 1 0 0 1 1-1Z"
    />
  </Svg>
);

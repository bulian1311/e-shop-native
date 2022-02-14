import React, { ComponentProps } from "react";
import Svg, { Path } from "react-native-svg";

type Props = ComponentProps<typeof Svg>;

export const BellIcon = ({ ...props }: Props) => (
  <Svg width={24} height={24} fill="#9098B1" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a6.03 6.03 0 0 0-6.031 6.031v5.25a1 1 0 0 1-.06.34l-.361 1.004h12.904l-.362-1.005a1 1 0 0 1-.059-.338v-5.25C18.031 6.7 15.331 4 12 4Zm-8.031 6.031A8.03 8.03 0 0 1 12 2a8.031 8.031 0 0 1 8.031 8.031v5.076l.785 2.18a1 1 0 0 1-.941 1.338H4.125a1 1 0 0 1-.94-1.339l.784-2.179v-5.076Z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.625 16.625a1 1 0 0 1 1 1 2.375 2.375 0 1 0 4.75 0 1 1 0 1 1 2 0 4.375 4.375 0 1 1-8.75 0 1 1 0 0 1 1-1Z"
    />
  </Svg>
);

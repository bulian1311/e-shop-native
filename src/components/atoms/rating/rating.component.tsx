import React from "react";
import { starIcon } from "./icons/star.icon";
import { SvgXml } from "react-native-svg";

import { StyledView } from "./rating.styles";
import { PropsType } from "./rating.props";
export const Rating = ({ rating }: PropsType) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <StyledView>
      {ratingArray.map((item, i) => (
        <SvgXml fill="#fff" width={12} height={12} key={i} xml={starIcon} />
      ))}
    </StyledView>
  );
};

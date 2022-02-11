import React from "react";
import { StarIcon } from "./icons/star.icon";
import { StyledView } from "./rating.styles";
import { PropsType } from "./rating.props";

export const Rating = ({ rating }: PropsType) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <StyledView>
      {ratingArray.map((item, i) => (
        <StarIcon fill="#000" key={i} />
      ))}
    </StyledView>
  );
};

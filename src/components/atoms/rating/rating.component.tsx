import React from "react";
import { useTheme } from "styled-components/native";
import { StarIcon } from "../icons/star.icon";
import { StyledView } from "./rating.styles";
import { PropsType } from "./rating.props";

export const Rating = ({ rating }: PropsType) => {
  const theme = useTheme();
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <StyledView>
      {ratingArray.map((item, i) => (
        <StarIcon fill={theme.colors.ui.rating} key={i} />
      ))}
    </StyledView>
  );
};

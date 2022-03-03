import React from "react";
import { LayoutBack } from "../../../components";
import { Props } from "./categories.props";
import { StyledText } from "./categories.styled";

export const CategoriesScreen = ({ ...props }: Props) => {
  return (
    <LayoutBack {...props}>
      <StyledText>CategoriesScreen</StyledText>
    </LayoutBack>
  );
};

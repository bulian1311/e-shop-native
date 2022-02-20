import React from "react";
import { StackLayout } from "../../../components";
import { Props } from "./categories.props";
import { StyledText } from "./categories.styled";

export const CategoriesScreen = ({ ...props }: Props) => {
  return (
    <StackLayout {...props}>
      <StyledText>CategoriesScreen</StyledText>
    </StackLayout>
  );
};

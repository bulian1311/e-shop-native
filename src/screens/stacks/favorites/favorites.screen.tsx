import React from "react";
import { Props } from "./favorites.props";
import { StyledText } from "./favorites.styled";
import { StackLayout } from "../../../components";

export const FavoritesScreen = ({ ...props }: Props) => {
  return (
    <StackLayout {...props}>
      <StyledText>FavoritesScreen</StyledText>
    </StackLayout>
  );
};

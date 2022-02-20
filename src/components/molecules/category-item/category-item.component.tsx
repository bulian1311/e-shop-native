import React from "react";
import { useTheme } from "styled-components/native";
import { OfferIcon } from "../../atoms/icons";
import { Props } from "./category-item.props";
import { StyledView } from "./category-item.styled";

export const CategoryItem = ({ ...props }: Props) => {
  const theme = useTheme();
  return (
    <StyledView {...props}>
      <OfferIcon stroke={theme.colors.ui.primary} />
    </StyledView>
  );
};

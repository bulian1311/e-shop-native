import React from "react";
import { Props } from "./account.props";
import { LayoutSearch } from "../../../components";
import { StyledView, StyledText } from "./account.styled";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <LayoutSearch {...props}>
      <StyledText>AccountScreen</StyledText>
    </LayoutSearch>
  );
};

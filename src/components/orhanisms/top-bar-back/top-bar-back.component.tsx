import React from "react";
import { Props } from "./top-bar-back.props";
import { NavBack } from "../../molecules";
import { StyledView } from "./top-bar-back.styled";

export const TopBarBack = ({ title, ...props }: Props) => {
  return (
    <StyledView {...props}>
      <NavBack title={title} />
    </StyledView>
  );
};

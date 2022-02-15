import React from "react";
import { Props } from "./spacer.props";
import { StyledView } from "./spacer.styled";

export const Spacer = ({ ...props }: Props) => {
  return <StyledView {...props}></StyledView>;
};

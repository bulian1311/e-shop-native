import React from "react";
import { Props } from "./qq.props";
import { StyledView } from "./qq.styled";

export const QQ = ({ ...props }: Props) => {
  return <StyledView {...props}>QQ</StyledView>;
};

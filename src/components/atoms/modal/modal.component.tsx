import React from "react";
import { Props } from "./modal.props";
import { StyledModal } from "./modal.styled";

export const Modal = ({ children, ...props }: Props) => {
  return (
    <StyledModal animationType="slide" {...props}>
      {children}
    </StyledModal>
  );
};

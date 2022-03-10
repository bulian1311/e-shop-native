import React, { useState, useEffect } from "react";
import { Props } from "./color-picker-item.props";
import { StyledView, StyledWrapper } from "./color-picker-item.styled";

export const ColorPickerItem = ({ color, active, setActive }: Props) => {
  return (
    <StyledWrapper color={color} onPress={() => setActive()}>
      <StyledView active={active} color={color} />
    </StyledWrapper>
  );
};

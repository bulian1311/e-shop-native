import React from "react";
import { Paragraph } from "../../atoms";
import { Props } from "./size-picker-item.props";
import { StyledTouchableOpacity } from "./size-picker-item.styled";

export const SizePickerItem = ({ active, setActive, sizeData }: Props) => {
  return (
    <StyledTouchableOpacity active={active} onPress={() => setActive()}>
      <Paragraph weight="bold" size="title">
        {sizeData}
      </Paragraph>
    </StyledTouchableOpacity>
  );
};

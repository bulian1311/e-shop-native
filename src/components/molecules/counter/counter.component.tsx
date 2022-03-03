import React from "react";
import { PlusIcon, MinusIcon } from "../../atoms/icons";
import { Paragraph } from "../../atoms";
import { Props } from "./counter.props";
import {
  StyledCounterWrapper,
  StyledCount,
  StyledPlus,
  StyledMinus,
  StyledTouchableOpacity,
} from "./counter.styled";

export const Counter = ({ ...props }: Props) => {
  return (
    <StyledCounterWrapper>
      <StyledTouchableOpacity>
        <StyledMinus>
          <MinusIcon />
        </StyledMinus>
      </StyledTouchableOpacity>
      <StyledCount>
        <Paragraph>1</Paragraph>
      </StyledCount>

      <StyledTouchableOpacity>
        <StyledPlus>
          <PlusIcon />
        </StyledPlus>
      </StyledTouchableOpacity>
    </StyledCounterWrapper>
  );
};

import React from "react";
import { Paragraph } from "../../atoms";
import { Props } from "./separator.props";
import {
  StyledSeparatopWrapper,
  StyledSeparatorLine,
} from "./separator.styled";

export const Separator = ({ title }: Props) => {
  return (
    <StyledSeparatopWrapper>
      <StyledSeparatorLine />
      {title && (
        <Paragraph
          style={{ marginHorizontal: 16 }}
          weight="bold"
          color="disabled"
        >
          {title}
        </Paragraph>
      )}
      <StyledSeparatorLine />
    </StyledSeparatopWrapper>
  );
};

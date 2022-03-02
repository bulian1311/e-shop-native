import React from "react";
import { Paragraph } from "../../atoms";
import { Props } from "./info.props";
import { StyledView } from "./info.styled";

export const Info = ({ message, ...props }: Props) => {
  return (
    <StyledView {...props}>
      <Paragraph size="title" color="light" weight="bold">
        {message}
      </Paragraph>
    </StyledView>
  );
};

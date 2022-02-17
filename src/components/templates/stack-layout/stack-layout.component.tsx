import React from "react";
import { Props } from "./stack-layout.props";
import { Container } from "../../atoms";
import { TopBarBack } from "../../orhanisms";
import { StyledView } from "./stack-layout.styled";

export const StackLayout = ({ children, ...props }: Props) => {
  return (
    <Container>
      <TopBarBack title="Back" />
      <StyledView {...props}>{children}</StyledView>
    </Container>
  );
};

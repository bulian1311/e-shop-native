import React from "react";
import { Props } from "./stack-layout.props";
import { Container, TopBarBack } from "../..";
import { StyledView, StyledText } from "./stack-layout.styled";

export const StackLayout = ({ children, ...props }: Props) => {
  return (
    <Container>
      <TopBarBack title="Back" />
      <StyledView {...props}>
        <StyledText>StackLayout</StyledText>
        {children}
      </StyledView>
    </Container>
  );
};

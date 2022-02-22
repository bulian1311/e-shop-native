import React from "react";
import { Container } from "../../atoms";
import { TopBarSearch } from "../../orhanisms";
import { Props } from "./tab-layout.props";
import { StyledView } from "./tab-layout.styled";

export const TabLayout = ({ children, ...props }: Props) => {
  return (
    <Container>
      <TopBarSearch />
      <StyledView showsVerticalScrollIndicator={false} {...props}>
        {children}
      </StyledView>
    </Container>
  );
};

import React, { useRef } from "react";
import { Animated } from "react-native";
import { Props } from "./stack-layout.props";
import { TopBarBack } from "../../orhanisms";
import { Container, AnimatedScrollY } from "../../../containers";
import { StyledScrollView, StyledView } from "./stack-layout.styled";

export const StackLayout = ({ children, ...props }: Props) => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <TopBarBack title="Back" />
      </AnimatedScrollY>

      <StyledScrollView
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          scrollY.current.setValue(e.nativeEvent.contentOffset.y);
        }}
        {...props}
      >
        <StyledView>{children}</StyledView>
      </StyledScrollView>
    </Container>
  );
};

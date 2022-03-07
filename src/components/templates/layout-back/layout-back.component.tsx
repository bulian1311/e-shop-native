import React, { useRef } from "react";
import { Animated } from "react-native";
import { Props } from "./layout-back.props";
import { TopBarBack } from "../../orhanisms";
import { Container, AnimatedScrollY } from "../../../containers";
import { StyledScrollView, StyledView } from "./layout-back.styled";

export const LayoutBack = ({ children, ...props }: Props) => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <TopBarBack title="Back" />
      </AnimatedScrollY>

      <StyledScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={4}
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

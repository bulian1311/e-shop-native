import React, { useRef } from "react";
import { Animated } from "react-native";
import { Container, AnimatedScrollY } from "../../../containers";
import { Headline } from "../../atoms";
import { Props } from "./layout-title.props";
import {
  StyledScrollView,
  StyledView,
  StyledHeaderWrapper,
} from "./layout-title.styled";

export const LayoutTitle = ({ children, title }: Props) => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <StyledHeaderWrapper>
          <Headline size="h2">{title}</Headline>
        </StyledHeaderWrapper>
      </AnimatedScrollY>

      <StyledScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={4}
        onScroll={(e) => {
          scrollY.current.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <StyledView>{children}</StyledView>
      </StyledScrollView>
    </Container>
  );
};

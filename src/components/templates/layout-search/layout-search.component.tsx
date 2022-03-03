import React, { useRef } from "react";
import { Animated } from "react-native";
import { TopBarSearch } from "../../orhanisms";
import { Container, AnimatedScrollY } from "../../../containers";
import { StyledScrollView, StyledView } from "./layout-search.styled";
import { Props } from "./layout-search.props";

export const LayoutSearch = ({ children, ...props }: Props) => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Container>
      <AnimatedScrollY ref={scrollY}>
        <TopBarSearch />
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

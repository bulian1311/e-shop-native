import React, { forwardRef, useRef } from "react";
import { Animated } from "react-native";
import { Props } from "./animated-scroll-y.props";
import { StyledAnimatedView, StyledView } from "./animated-scroll-y.styled";

export const AnimatedScrollY = forwardRef(
  ({ children, ...props }: Props, ref: any) => {
    const diffClampScrollY = useRef(
      Animated.diffClamp(ref.current, 0, 90)
    ).current;

    const translateY = diffClampScrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [0, -12],
    });

    return (
      <StyledAnimatedView
        {...props}
        nativeID="1"
        style={{
          transform: [{ translateY }],
        }}
      >
        <StyledView nativeID="2">{children}</StyledView>
      </StyledAnimatedView>
    );
  }
);

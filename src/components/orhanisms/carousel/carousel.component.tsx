import React, { useRef, useState } from "react";
import { Props } from "./carousel.props";
import { useInterval } from "../../../hooks";
import { Animated, Dimensions, Platform } from "react-native";
import {
  IndicatorsContainer,
  Indicator,
  StyledAnimatedView,
  StyledView,
} from "./carousel.styled";

export const Carousel = ({ isPlaying, items }: Props) => {
  const animation = useRef(new Animated.Value(0));
  const [currentItem, setCurrentItem] = useState(0);
  const MAX_WIDTH = Dimensions.get("screen").width;
  useInterval(() => handleAnimation(), isPlaying ? 2000 : null);

  const handleAnimation = () => {
    let newCurrentImage = currentItem + 1;

    if (newCurrentImage >= items.length) newCurrentImage = 0;

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: Platform.OS === "web" ? false : true,
    }).start();

    setCurrentItem(newCurrentImage);
  };

  return (
    <React.Fragment>
      <StyledAnimatedView
        style={{
          transform: [{ translateX: animation.current }],
        }}
      >
        {items.map((item, idx) => {
          return <StyledView key={idx}>{item}</StyledView>;
        })}
      </StyledAnimatedView>

      <IndicatorsContainer>
        {items.map((item, idx) => (
          <Indicator key={idx} isActive={idx === currentItem} />
        ))}
      </IndicatorsContainer>
    </React.Fragment>
  );
};

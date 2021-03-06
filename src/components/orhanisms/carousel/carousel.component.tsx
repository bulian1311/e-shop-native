import React, { useRef } from "react";
import { Props } from "./carousel.props";
import { Animated } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import {
  IndicatorsContainer,
  Indicator,
  StyledView,
  StyledFlatList,
} from "./carousel.styled";

export const Carousel = ({ items, marginX = 1 }: Props) => {
  const { window } = useDimensions();
  const MAX_WIDTH = window.width - marginX * 2;

  const scrollX = useRef(new Animated.Value(0)).current;
  const position = Animated.divide(scrollX, MAX_WIDTH);

  return (
    <React.Fragment>
      <StyledFlatList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={MAX_WIDTH}
        bounces={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={(item: any) => (
          <StyledView widthValue={MAX_WIDTH}>{item.item}</StyledView>
        )}
      />

      <IndicatorsContainer>
        {items.map((item, idx) => {
          let opacity = position.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.2, 1, 0.2],
            extrapolate: "clamp",
          });

          return <Indicator key={idx} style={{ opacity: opacity }} />;
        })}
      </IndicatorsContainer>
    </React.Fragment>
  );
};

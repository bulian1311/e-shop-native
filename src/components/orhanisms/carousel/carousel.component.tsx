import React from "react";
import { Props } from "./carousel.props";
import { Animated, Dimensions } from "react-native";
import {
  IndicatorsContainer,
  Indicator,
  StyledView,
  StyledFlatList,
} from "./carousel.styled";

export const Carousel = ({ items, marginX = 1 }: Props) => {
  const MAX_WIDTH = Dimensions.get("window").width - marginX * 2;

  const animation = new Animated.Value(0);
  const position = Animated.divide(animation, MAX_WIDTH);

  return (
    <React.Fragment>
      <StyledFlatList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={MAX_WIDTH}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
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

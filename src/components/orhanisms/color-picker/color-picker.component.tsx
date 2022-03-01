import React, { useState } from "react";
import { Spacer } from "../../atoms";
import { ListHorizontal, ColorPickerItem } from "../../molecules";
import { Props } from "./color-picker.props";

export const ColorPicker = ({ colors, ...props }: Props) => {
  const [activeColor, setActiveColor] = useState<number>(0);

  return (
    <ListHorizontal
      title="Select Color"
      data={colors}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item, index }: any) => (
        <>
          <ColorPickerItem
            color={item}
            active={index === activeColor}
            setActive={() => setActiveColor(index)}
          />
          <Spacer pos="right" size="medium" />
        </>
      )}
    />
  );
};

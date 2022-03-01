import React, { useState } from "react";
import { Spacer } from "../../atoms";
import { ListHorizontal, SizePickerItem } from "../../molecules";
import { Props } from "./size-picker.props";

export const SizePicker = ({ sizes, ...props }: Props) => {
  const [activeSize, setActiveSize] = useState<number>(0);

  return (
    <ListHorizontal
      title="Select Size"
      data={sizes}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item, index }: any) => (
        <>
          <SizePickerItem
            sizeData={item}
            active={index === activeSize}
            setActive={() => setActiveSize(index)}
          />
          <Spacer pos="right" size="medium" />
        </>
      )}
    />
  );
};

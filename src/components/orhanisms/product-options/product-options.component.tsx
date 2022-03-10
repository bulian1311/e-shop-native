import React, { ReactNode, Fragment } from "react";
import { Spacer } from "../../atoms";
import { ColorPicker } from "../color-picker";
import { SizePicker } from "../size-picker";
import { StyledView } from "./product-options.styled";
import { Props } from "./product-options.props";

export const ProductOptions = ({ options }: Props) => {
  const renderOptions: ReactNode[] = [];

  options.forEach((option) => {
    option.name === "Size" &&
      renderOptions.push(
        <Fragment key={option.id}>
          <Spacer size="small" />
          <SizePicker sizes={option.values} />
        </Fragment>
      );
    option.name === "Color" &&
      renderOptions.push(
        <Fragment key={option.id}>
          <Spacer size="small" />
          <ColorPicker colors={option.values} />
        </Fragment>
      );
  });

  return <StyledView>{renderOptions}</StyledView>;
};

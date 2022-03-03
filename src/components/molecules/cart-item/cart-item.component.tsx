import React from "react";
import { Spacer, Paragraph, Image } from "../../atoms";
import { HeartIcon, TrashIcon } from "../../atoms/icons";
import { Counter } from "../counter";
import { Props } from "./cart-item.props";
import {
  StyledItemWrapper,
  StyledViewRow,
  StyledViewColumn,
  StyledIconsWrapper,
} from "./cart-item.styled";

export const CartItem = ({ item, ...props }: Props) => {
  return (
    <StyledItemWrapper {...props}>
      <Image src={item.img} height={72} width={72} />
      <Spacer pos="right" />
      <StyledViewColumn>
        <StyledViewRow>
          <Paragraph weight="bold" size="button">
            {item.title}
          </Paragraph>

          <StyledIconsWrapper>
            <HeartIcon />
            <Spacer size="small" pos="right" />
            <TrashIcon />
          </StyledIconsWrapper>
        </StyledViewRow>

        <StyledViewRow>
          <Paragraph weight="bold" size="button" color="primary">
            {item.price}
          </Paragraph>
          <Counter />
        </StyledViewRow>
      </StyledViewColumn>
    </StyledItemWrapper>
  );
};

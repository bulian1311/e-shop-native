import React from "react";
import { Paragraph, Spacer } from "../../atoms";
import { Props } from "./profile-header.props";
import {
  StyledWrapper,
  StyledView,
  StyledImage,
} from "./profile-header.styled";

let img =
  "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp";

export const ProfileHeader = ({ ...props }: Props) => {
  return (
    <StyledWrapper>
      <StyledImage source={{ uri: img }} />
      <Spacer pos="left" size="large" />
      <StyledView>
        <Paragraph size="title" weight="bold">
          Maximus Gold
        </Paragraph>
        <Paragraph color="disabled">@derlaxy</Paragraph>
      </StyledView>
    </StyledWrapper>
  );
};

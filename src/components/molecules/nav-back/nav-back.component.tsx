import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Headline, Spacer } from "../../atoms";
import { ArrowIconLeft } from "../../atoms/icons";
import { Props } from "./nav-back.props";
import { StyledTouchableOpacity } from "./nav-back.styled";

export const NavBack = ({ title, ...props }: Props) => {
  const navigation = useNavigation();

  return (
    <StyledTouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowIconLeft />
      <Spacer pos="left" size="large" />
      <Headline size="h2" weight="bold">
        {title}
      </Headline>
    </StyledTouchableOpacity>
  );
};

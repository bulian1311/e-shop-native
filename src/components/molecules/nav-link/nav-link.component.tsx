import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Headline } from "../../atoms";
import { Props } from "./nav-link.props";
import { StyledTouchableOpacity } from "./nav-link.styled";

export const NavLink = ({ title, children, navigateTo, params }: Props) => {
  const navigation: any = useNavigation();

  return (
    <StyledTouchableOpacity
      onPress={() => navigation.navigate({ name: navigateTo, params: params })}
    >
      {title && (
        <Headline size="h3" color="primary">
          {title}
        </Headline>
      )}

      {children}
    </StyledTouchableOpacity>
  );
};

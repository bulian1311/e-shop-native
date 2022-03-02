import React from "react";
import {
  HomeIcon,
  SearchIcon,
  OfferIcon,
  CartIcon,
  AccountIcon,
} from "../../atoms/icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { StyledTouchableOpacity } from "./nav-tab-icon.styled";
import { Props } from "./nav-tab-icon.props";

export const NavTabIcon = ({ navigateTo }: Props) => {
  const { navigate, isFocused }: any = useNavigation();
  const theme = useTheme();
  const activeColor = theme.colors.ui.primary;
  const notActiveColor = theme.colors.ui.disabled;

  let navIcon: any;

  switch (navigateTo) {
    case "Home":
      navIcon = (
        <HomeIcon stroke={isFocused() ? activeColor : notActiveColor} />
      );
      break;
    case "Explore":
      navIcon = (
        <SearchIcon stroke={isFocused() ? activeColor : notActiveColor} />
      );
      break;
    case "Cart":
      navIcon = (
        <CartIcon stroke={isFocused() ? activeColor : notActiveColor} />
      );
      break;
    case "Offer":
      navIcon = (
        <OfferIcon stroke={isFocused() ? activeColor : notActiveColor} />
      );
      break;
    case "Account":
      navIcon = (
        <AccountIcon stroke={isFocused() ? activeColor : notActiveColor} />
      );
      break;
  }

  return (
    <StyledTouchableOpacity onPress={() => navigate(navigateTo)}>
      {navIcon}
    </StyledTouchableOpacity>
  );
};

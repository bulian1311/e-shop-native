import React from "react";
import { useTheme } from "styled-components/native";
import { Paragraph, Spacer } from "../../atoms";
import {
  AccountIcon,
  OrderIcon,
  AddresIcon,
  PaymentIcon,
} from "../../atoms/icons";
import { NavLink } from "../nav-link";
import { Props } from "./account-item.props";
import { StyledView } from "./account-item.styled";

export const AccountItem = ({ type, ...props }: Props) => {
  const { colors } = useTheme();

  let icon;

  switch (type) {
    case "Profile":
      icon = <AccountIcon stroke={colors.ui.primary} />;
      break;
    case "Order":
      icon = <OrderIcon stroke={colors.ui.primary} />;
      break;
    case "Addres":
      icon = <AddresIcon stroke={colors.ui.primary} />;
      break;
    case "Payment":
      icon = <PaymentIcon stroke={colors.ui.primary} />;
      break;
  }

  return (
    <NavLink navigateTo="Profile">
      <StyledView {...props}>
        {icon}
        <Spacer pos="right" size="large" />
        <Paragraph size="button" weight="bold">
          {type}
        </Paragraph>
      </StyledView>
    </NavLink>
  );
};

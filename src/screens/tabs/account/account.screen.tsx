import React from "react";
import { Props } from "./account.props";
import { LayoutTitle, AccountItem, Spacer } from "../../../components";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <LayoutTitle title="Account" {...props}>
      <AccountItem type="Profile" />
      <AccountItem type="Order" />
      <AccountItem type="Addres" />
      <AccountItem type="Payment" />
    </LayoutTitle>
  );
};

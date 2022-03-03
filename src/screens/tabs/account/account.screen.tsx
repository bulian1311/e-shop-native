import React from "react";
import { Props } from "./account.props";
import { LayoutTitle, Spacer } from "../../../components";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <LayoutTitle title="Account" {...props}>
      <Spacer />
    </LayoutTitle>
  );
};

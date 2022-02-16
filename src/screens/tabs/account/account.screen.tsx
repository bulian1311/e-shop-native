import React from "react";
import { Props } from "./account.props";
import { TabLayout } from "../../../components";
import { StyledView, StyledText } from "./account.styled";

export const AccountScreen = ({ ...props }: Props) => {
  return (
    <TabLayout {...props}>
      <StyledText>AccountScreen</StyledText>
    </TabLayout>
  );
};

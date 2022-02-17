import React from "react";
import { Props } from "./notifications.props";
import { StyledText } from "./notifications.styled";
import { StackLayout } from "../../../components";

export const NotificationsScreen = ({ ...props }: Props) => {
  return (
    <StackLayout {...props}>
      <StyledText>NotificationsScreen</StyledText>
    </StackLayout>
  );
};

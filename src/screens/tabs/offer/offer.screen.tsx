import React from "react";
import { Props } from "./offer.props";
import { TabLayout } from "../../../components";
import { StyledView, StyledText } from "./offer.styled";

export const OfferScreen = ({ ...props }: Props) => {
  return (
    <TabLayout {...props}>
      <StyledText>OfferScreen</StyledText>
    </TabLayout>
  );
};

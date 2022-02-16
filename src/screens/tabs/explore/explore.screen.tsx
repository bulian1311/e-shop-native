import React from "react";
import { Props } from "./explore.props";
import { TabLayout } from "../../../components";
import { StyledView, StyledText } from "./explore.styled";

export const ExploreEcreen = ({ ...props }: Props) => {
  return (
    <TabLayout {...props}>
      <StyledText>Explore</StyledText>
    </TabLayout>
  );
};

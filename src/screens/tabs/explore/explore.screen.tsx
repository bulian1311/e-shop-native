import React from "react";
import { Props } from "./explore.props";
import { TabLayout, Headline, CategoryItem, Spacer } from "../../../components";
import { StyledView } from "./explore.styled";

export const ExploreEcreen = ({ ...props }: Props) => {
  return (
    <TabLayout {...props}>
      <Headline size="h2">Man Fashion</Headline>

      <Spacer />

      <StyledView>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <CategoryItem style={{ marginBottom: 16 }} key={i} category={item} />
        ))}
      </StyledView>

      <Spacer />

      <Headline size="h2">Woman Fashion</Headline>

      <Spacer />

      <StyledView>
        {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
          <CategoryItem style={{ marginBottom: 16 }} key={i} category={item} />
        ))}
      </StyledView>
    </TabLayout>
  );
};

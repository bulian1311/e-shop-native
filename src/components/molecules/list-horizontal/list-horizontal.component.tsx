import React from "react";
import { Headline, Spacer } from "../../atoms";
import { NavLink } from "../../molecules";
import { Props } from "./list-horizontal.props";
import { StyledView, StyledFlatList } from "./list-horizontal.styled";

export const ListHorizontal = ({ title, navigateTo, ...props }: Props) => {
  return (
    <React.Fragment>
      <StyledView>
        <Headline size="h3" color="dark">
          {title}
        </Headline>
        <NavLink title="See More" navigateTo={navigateTo} />
      </StyledView>

      <Spacer pos="top" size="medium" />

      <StyledFlatList
        {...props}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </React.Fragment>
  );
};

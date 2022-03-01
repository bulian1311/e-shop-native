import React from "react";
import { Headline, Spacer } from "../../atoms";
import { NavLink } from "../nav-link";
import { Props } from "./list-horizontal.props";
import { StyledView, StyledFlatList } from "./list-horizontal.styled";

export const ListHorizontal = ({ title, navigateTo, ...props }: Props) => {
  return (
    <React.Fragment>
      <StyledView>
        <Headline size="h3" color="dark">
          {title}
        </Headline>

        {navigateTo && <NavLink title="See More" navigateTo={navigateTo} />}
      </StyledView>

      <Spacer pos="top" size="medium" />

      <StyledFlatList
        {...props}
        bounces={false}
        horizontal={true}
        decelerationRate={0.8}
        showsHorizontalScrollIndicator={false}
      />
    </React.Fragment>
  );
};

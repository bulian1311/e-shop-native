import React from "react";
import { Headline, Spacer } from "../../atoms";
import { NavLink } from "../../molecules";
import { Props } from "./list-horizontal.props";
import { StyledView, StyledScrollView } from "./list-horizontal.styled";

export const ListHorizontal = ({ children, title, navigateTo }: Props) => {
  return (
    <React.Fragment>
      <StyledView>
        <Headline size="h3" color="dark">
          {title}
        </Headline>
        <NavLink title="Categories" navigateTo={navigateTo} />
      </StyledView>

      <Spacer pos="top" size="medium" />

      <StyledScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </StyledScrollView>
    </React.Fragment>
  );
};

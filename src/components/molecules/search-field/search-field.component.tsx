import React, { useState } from "react";
import { Props } from "./search-field.props";
import { Input } from "../../atoms";
import { HeartIcon, BellIcon } from "../../atoms/icons";
import { StyledView, IconContainer } from "./search-field.styled";

export const SearchField = ({ ...props }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <StyledView {...props}>
      <Input
        icon="search"
        value={searchQuery}
        onChangeText={(value) => setSearchQuery(value)}
      />
      <IconContainer>
        <HeartIcon />
      </IconContainer>
      <IconContainer>
        <BellIcon />
      </IconContainer>
    </StyledView>
  );
};

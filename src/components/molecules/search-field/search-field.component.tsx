import React, { useState } from "react";
import { Props } from "./search-field.props";
import { Input } from "../../atoms";
import { StyledView } from "./search-field.styled";

export const SearchField = ({ ...props }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Input
        icon="search"
        value={searchQuery}
        onChangeText={(value) => setSearchQuery(value)}
      />
    </>
  );
};

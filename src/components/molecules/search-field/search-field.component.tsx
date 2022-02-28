import React, { useState } from "react";
import { Props } from "./search-field.props";
import { Input } from "../../atoms";

export const SearchField = ({ ...props }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <Input
        {...props}
        icon="search"
        value={searchQuery}
        onChangeText={(value) => setSearchQuery(value)}
      />
    </>
  );
};

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Props } from "./top-bar-search.props";
import { HeartIcon, BellIcon } from "../../atoms/icons";
import { Spacer } from "../../atoms";
import { SearchField } from "../../molecules";
import { StyledView, IconContainer } from "./top-bar-search.styled";

export const TopBarSearch = ({ ...props }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation: any = useNavigation();

  return (
    <StyledView {...props}>
      <SearchField />
      <IconContainer onPress={() => navigation.navigate({ name: "Favorites" })}>
        <HeartIcon />
      </IconContainer>
      <IconContainer
        onPress={() => navigation.navigate({ name: "Notifications" })}
      >
        <BellIcon />
      </IconContainer>
    </StyledView>
  );
};

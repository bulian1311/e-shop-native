import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Props } from "./input.props";
import { StyledTextInput, Container } from "./input.styled";

import { SearchIcon, AccountIcon, MailIcon, LockIcon } from "../icons";

export const Input = ({ icon, ...props }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const theme = useTheme();

  let Icon;
  switch (icon) {
    case "search":
      Icon = (
        <SearchIcon
          stroke={focus ? theme.colors.ui.primary : theme.colors.ui.disabled}
        />
      );
      break;
    case "mail":
      Icon = (
        <MailIcon
          fill={focus ? theme.colors.ui.primary : theme.colors.ui.disabled}
        />
      );
      break;
    case "lock":
      Icon = (
        <LockIcon
          fill={focus ? theme.colors.ui.primary : theme.colors.ui.disabled}
        />
      );
      break;
    case "account":
      Icon = (
        <AccountIcon
          stroke={focus ? theme.colors.ui.primary : theme.colors.ui.disabled}
        />
      );
      break;
  }

  return (
    <Container focus={focus}>
      {Icon}
      <StyledTextInput
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...props}
      />
    </Container>
  );
};

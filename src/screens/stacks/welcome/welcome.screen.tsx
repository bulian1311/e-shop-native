import React from "react";
import { useTheme } from "styled-components/native";
import { LogoIcon } from "../../../components/atoms/icons";
import { StyledView } from "./welcome.styled";

export const WelcomeScreen = () => {
  const { colors } = useTheme();
  return (
    <StyledView>
      <LogoIcon rectFill={colors.bg.primary} pathFill={colors.ui.primary} />
    </StyledView>
  );
};

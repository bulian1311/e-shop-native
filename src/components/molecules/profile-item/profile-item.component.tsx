import React from "react";
import { useTheme } from "styled-components/native";
import {
  ArrowRightIcon,
  MailIcon,
  LockIcon,
  FmaleIcon,
  CelendarIcon,
  PhoneIcon,
} from "../../atoms/icons";
import { Paragraph, Spacer } from "../../atoms";
import { Props } from "./profile-item.props";
import {
  StyledViewLeft,
  StyledViewRight,
  StyledWrapper,
} from "./profile-item.styled";

export const ProfileItem = ({ type, ...props }: Props) => {
  const { colors } = useTheme();
  let icon;
  let value;

  switch (type) {
    case "Gender":
      icon = <FmaleIcon stroke={colors.ui.primary} />;
      value = "Fmale";
      break;
    case "Birthday":
      icon = <CelendarIcon stroke={colors.ui.primary} />;
      value = "12-12-2000";
      break;
    case "Email":
      icon = <MailIcon stroke={colors.ui.primary} />;
      value = "test@gmail.com";
      break;
    case "Phone":
      icon = <PhoneIcon stroke={colors.ui.primary} />;
      value = "+7 (915) 999-99-99";
      break;
    case "Password":
      icon = <LockIcon stroke={colors.ui.primary} />;
      value = "12344";
      break;
  }

  return (
    <StyledWrapper {...props}>
      <StyledViewLeft>
        {icon}
        <Spacer pos="left" />
        <Paragraph size="button" weight="bold">
          {type}
        </Paragraph>
      </StyledViewLeft>

      <StyledViewRight>
        <Paragraph size="button" color="disabled">
          {value}
        </Paragraph>
        <Spacer pos="right" />
        <ArrowRightIcon />
      </StyledViewRight>
    </StyledWrapper>
  );
};

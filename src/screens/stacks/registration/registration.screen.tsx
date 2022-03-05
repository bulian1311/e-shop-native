import React from "react";
import { Container } from "../../../containers";
import { LogoIcon } from "../../../components/atoms/icons";
import {
  Spacer,
  Paragraph,
  Headline,
  RegisterForm,
  NavLink,
} from "../../../components";
import { StyledHeader, StyledView } from "./registration.styled";

export const RegistrationScreen = () => {
  return (
    <Container>
      <StyledHeader>
        <LogoIcon />
        <Spacer size="large" />
        <Headline size="h2">Welcome to Lafyuu</Headline>
        <Spacer size="small" />
        <Paragraph size="button" color="disabled">
          Sign in to continue
        </Paragraph>
      </StyledHeader>

      <Spacer size="extraLarge" />
      <RegisterForm />

      <Spacer size="large" />
      <StyledView>
        <Paragraph size="button" color="disabled">
          Have a account?
        </Paragraph>
        <Spacer pos="left" size="small" />
        <NavLink navigateTo="Login">
          <Paragraph size="button" weight="bold" color="primary">
            Sign In
          </Paragraph>
        </NavLink>
      </StyledView>
    </Container>
  );
};

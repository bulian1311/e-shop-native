import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../containers";
import { LogoIcon } from "../../../components/atoms/icons";
import {
  Spacer,
  Paragraph,
  Headline,
  LoginForm,
  Separator,
  Button,
  NavLink,
} from "../../../components";
import { Props } from "./login.props";
import { StyledHeader, StyledView } from "./login.styled";

export const LoginScreen = ({ ...props }: Props) => {
  const { navigate }: any = useNavigation();
  return (
    <Container {...props}>
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
      <LoginForm />

      <Spacer size="large" />
      <Separator title="OR" />

      <Spacer size="large" />
      <Button
        onPress={() => navigate("Tabs")}
        color="ghost"
        title="In As Guest"
      />

      <Spacer size="large" />
      <StyledView>
        <Paragraph size="button" color="disabled">
          Don’t have a account?
        </Paragraph>
        <Spacer pos="left" size="small" />
        <NavLink navigateTo="Registration">
          <Paragraph size="button" weight="bold" color="primary">
            Register
          </Paragraph>
        </NavLink>
      </StyledView>
    </Container>
  );
};

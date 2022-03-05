import React from "react";
import { Spacer, Input, Button } from "../../atoms";

export const RegisterForm = () => {
  return (
    <React.Fragment>
      <Input icon="account" />

      <Spacer />
      <Input icon="mail" />

      <Spacer />
      <Input icon="lock" />

      <Spacer />
      <Input icon="lock" />

      <Spacer size="extraLarge" />
      <Button title="Sign Up" />
    </React.Fragment>
  );
};

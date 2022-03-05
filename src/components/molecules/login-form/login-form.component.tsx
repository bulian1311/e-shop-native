import React from "react";
import { Spacer, Input, Button } from "../../atoms";

export const LoginForm = () => {
  return (
    <React.Fragment>
      <Input icon="mail" />

      <Spacer />

      <Input icon="lock" />

      <Spacer size="extraLarge" />

      <Button title="Sign In" />
    </React.Fragment>
  );
};

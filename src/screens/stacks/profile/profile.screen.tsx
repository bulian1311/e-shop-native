import React from "react";
import {
  LayoutBack,
  ProfileHeader,
  ProfileItem,
  Spacer,
} from "../../../components";
import { Props } from "./profile.props";

export const ProfileScreen = ({ ...props }: Props) => {
  return (
    <LayoutBack>
      <ProfileHeader />

      <Spacer />

      <ProfileItem type="Gender" />
      <ProfileItem type="Birthday" />
      <ProfileItem type="Email" />
      <ProfileItem type="Phone" />
      <ProfileItem type="Password" />

      <Spacer />
    </LayoutBack>
  );
};

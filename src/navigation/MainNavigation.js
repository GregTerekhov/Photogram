import React from "react";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useAuthentication } from "utils/hooks";
import { BackgroundImage } from "components";

const MainNavigation = () => {
  const { user } = useAuthentication();

  return (
    <BackgroundImage>{!user ? <AuthStack /> : <UserStack />}</BackgroundImage>
  );
};
export default MainNavigation;

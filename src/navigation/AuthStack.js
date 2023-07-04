import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp } from "screens";

const Auth = createStackNavigator();

const AuthStack = () => {
  const MyTheme = {
    colors: {
      primary: "#212121",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Auth.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="SignIn" component={SignIn} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

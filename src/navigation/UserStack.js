import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Comments, Home, Map } from "screens";
import { LinkGoBack } from "components";

const User = createStackNavigator();

const UserStack = () => {
  const MyTheme = {
    colors: {
      primary: "#212121",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <User.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
            backgroundColor: "#fff",
          },
          headerTitleAlign: "center",
        }}
      >
        <User.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <User.Screen
          name="Comments"
          component={Comments}
          options={{ title: "Коментарі", headerLeft: () => <LinkGoBack /> }}
        />
        <User.Screen
          name="Map"
          component={Map}
          options={({ route }) => ({
            title: "Мапа",
            location: route.params.location,
            latitude: route.params.latitude,
            longitude: route.params.longitude,
            headerLeft: () => <LinkGoBack />,
          })}
        />
      </User.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;

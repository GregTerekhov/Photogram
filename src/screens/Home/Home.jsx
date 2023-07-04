import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "components";
import TabStack from "navigation/TabStack";

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <TabStack />
        <StatusBar style="auto" />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;

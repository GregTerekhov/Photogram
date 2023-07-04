import React from "react";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "styles/components/backgroundImage";

const BackgroundImage = ({ children }) => {
  const handlePress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <ImageBackground
        source={require("assets/images/background/photo-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default BackgroundImage;

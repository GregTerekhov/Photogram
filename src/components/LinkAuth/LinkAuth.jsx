import React from "react";
import { Text } from "react-native";
import styles from "styles/components/linkAuth";

const TextLinkToAuth = ({ onPress, screen }) => {
  const buttonText =
    screen === "SignUp"
      ? "Вже є акаунт? Увійти"
      : "Немає акаунту? Зареєструватися";
  return (
    <Text style={styles.textAuth} onPress={onPress}>
      {buttonText}
    </Text>
  );
};

export default TextLinkToAuth;

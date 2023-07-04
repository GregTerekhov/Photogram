import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "styles/components/buttonAuth";

const ButtonAuth = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonAuth}>
      <Text style={{ textAlign: "center", color: "#fff" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAuth;

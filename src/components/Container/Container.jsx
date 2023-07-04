import React from "react";
import { SafeAreaView } from "react-native";
import styles from "styles/components/container";

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

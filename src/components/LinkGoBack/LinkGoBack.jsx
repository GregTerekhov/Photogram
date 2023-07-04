import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "assets/svg/arrow-left.svg";
import styles from "styles/components/linkGoBack";

const LinkGoBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.goBackBtn}
      onPress={() => navigation.goBack("Home")}
      activeOpacity={0.8}
    >
      <ArrowLeftIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default LinkGoBack;

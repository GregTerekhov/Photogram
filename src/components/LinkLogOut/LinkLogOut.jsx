import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ExitIcon from "assets/svg/log-out.svg";
import styles from "styles/components/linkLogOut";

const LinkLogOut = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.headerButton}
      onPress={() => navigation.navigate("SignIn")}
      activeOpacity={0.8}
    >
      <ExitIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default LinkLogOut;

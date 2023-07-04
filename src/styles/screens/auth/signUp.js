import { StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "relative",
    top: -60,
    left: "50%",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    transform: [{ translateX: -60 }],
  },
  title: {
    ...commonStyles.title,
    marginTop: -28,
  },
  inputBox: commonStyles.inputBox,
  error: commonStyles.error,
});

export default styles;

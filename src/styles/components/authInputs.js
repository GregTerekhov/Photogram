import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    paddingTop: 16,
    paddingBottom: 15,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    color: "#212121",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    height: 50,
  },
  isActiveInput: {
    width: "100%",
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  togglePassword: {
    position: "absolute",
    color: "#1b4371",
    fontSize: 16,
    lineHeight: 19,
    top: 16,
    right: 16,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 0,
    position: "relative",
    marginBottom: 32,
  },
  createPostInputs: {
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    width: "100%",
    fontSize: 16,
    color: "#212121",
    lineHeight: 19,
    gap: 16,
  },
  iconLocation: {
    position: "absolute",
    left: 0,
    top: 18,
    zIndex: 1,
    width: 24,
    height: 24,
  },
});

export default styles;

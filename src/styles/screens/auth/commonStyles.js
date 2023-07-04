import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
  },
  inputBox: {
    gap: 16,
    marginBottom: 43,
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#FF6C00",
  },
});

export default commonStyles;

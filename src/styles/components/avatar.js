import { StyleSheet } from "react-native";

const baseButtonStyle = {
  position: "absolute",
  bottom: 14,
  right: -12,
  width: 25,
  height: 25,
  backgroundColor: "#fff",
  borderRadius: 50,
  borderWidth: 1,
  borderStyle: "solid",
  alignItems: "center",
  justifyContent: "center",
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  chosenAvatarBtn: {
    ...baseButtonStyle,
    borderColor: "#E8E8E8",
    transform: [{ rotate: "45deg" }],
  },
  chooseAvatarBtn: {
    ...baseButtonStyle,
    borderColor: "#FF6C00",
  },
});

export default styles;

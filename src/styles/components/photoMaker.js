import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBox: {
    marginBottom: 32,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  iconCameraWrapper: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  iconCamera: {
    position: "absolute",
    width: 24,
    height: 24,
    zIndex: 2,
  },
  imageToActionText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",
  },
  imagePlug: {
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e8e8e8",
    backgroundColor: "#f6f6f6",
    marginBottom: 8,
    position: "relative",
  },
});

export default styles;

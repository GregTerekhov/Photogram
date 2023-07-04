import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { Alert } from "react-native";

const openImagePicker = async ({ setSelectedImage }) => {
  const { status } = await requestMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Дозвіл на доступ до галереї не надано");
    return;
  }

  const result = await launchImageLibraryAsync();
  if (result.assets && result.assets.length > 0) {
    console.log("Вибране зображення:", result.assets[0].uri);
    setSelectedImage(result.assets[0].uri);
  }
};

export default openImagePicker;

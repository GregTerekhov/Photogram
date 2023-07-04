import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CameraIcon from "assets/svg/camera.svg";
import styles from "styles/components/photoMaker";

const PhotoMaker = ({ takePhoto, imageUri }) => {
  return (
    <View style={styles.imageBox}>
      {imageUri ? (
        <TouchableOpacity onPress={takePhoto}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: imageUri }}
              style={{ width: "100%", height: 240 }}
            />
            <View
              style={[
                styles.iconCameraWrapper,
                { backgroundColor: "rgba(255, 255, 255, 0.3)" },
              ]}
            >
              <CameraIcon
                width={24}
                height={24}
                fill="#fff"
                style={styles.iconCamera}
              />
            </View>
          </View>
          <Text style={styles.imageToActionText}>Редагувати фото</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={takePhoto}>
          <View style={styles.imagePlug}>
            <View style={styles.iconCameraWrapper}>
              <CameraIcon
                width={24}
                height={24}
                fill="#bdbdbd"
                style={styles.iconCamera}
              />
            </View>
          </View>
          <Text style={styles.imageToActionText}>Завантажте фото</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PhotoMaker;

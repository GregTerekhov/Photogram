import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import openImagePicker from "utils/helpers";
import AddImage from "assets/svg/add-avatar.svg";
import styles from "styles/components/avatar";

const Avatar = ({ screen, selectedImage, setSelectedImage }) => {
  return (
    <>
      <View style={styles.imageWrapper}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>
      {screen !== "Posts" && (
        <TouchableOpacity
          onPress={
            selectedImage
              ? () => setSelectedImage(null)
              : () => openImagePicker({ setSelectedImage })
          }
          style={
            selectedImage ? styles.chosenAvatarBtn : styles.chooseAvatarBtn
          }
        >
          <AddImage
            width={25}
            height={25}
            fill={selectedImage ? "#E8E8E8" : "#FF6C00"}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Avatar;

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "styles/components/buttonPublish";

const ButtonPublish = ({ imageUri, publishPost }) => {
  const publishDisabled = !imageUri;

  const publishButtonLabel = publishDisabled ? "#bdbdbd" : "#fff";
  const addPostButtonStyle = {
    backgroundColor: publishDisabled ? "#f6f6f6" : "#ff6c00",
  };

  return (
    <TouchableOpacity
      disabled={publishDisabled}
      onPress={publishPost}
      style={[styles.addPostBtn, addPostButtonStyle]}
    >
      <Text style={{ color: publishButtonLabel }}>Опублікувати</Text>
    </TouchableOpacity>
  );
};

export default ButtonPublish;

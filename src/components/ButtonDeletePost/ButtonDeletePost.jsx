import React from "react";
import { TouchableOpacity } from "react-native";
import TrashIcon from "assets/svg/trash.svg";
import styles from "styles/components/buttonDeletePost";

const ButtonDeletePost = ({ deletePhoto }) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={deletePhoto}>
      <TrashIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ButtonDeletePost;

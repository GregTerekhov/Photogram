import React from "react";
import { TextInput, View } from "react-native";
import LocationIcon from "../../assets/svg/map-pin.svg";
// import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "styles/components/postInput";

const PostInput = ({
  namePhoto,
  currentLocation,
  // handleLocationClick,
  handleLocationChange,
  handleNameChange,
}) => {
  return (
    <>
      <TextInput
        style={styles.createPostInputs}
        placeholder="Назва..."
        placeholderTextColor="#bdbdbd"
        value={namePhoto}
        onChangeText={handleNameChange}
      />
      <View style={styles.inputBox}>
        {/* <TouchableOpacity
          onPress={handleLocationClick}
          
        > */}
        <LocationIcon
          width={24}
          height={24}
          style={styles.iconLocation}
          // onPress={handleLocationClick}
        />
        {/* </TouchableOpacity> */}

        <TextInput
          style={[styles.createPostInputs, { paddingLeft: 28 }]}
          placeholder="Місцевість..."
          placeholderTextColor="#bdbdbd"
          value={currentLocation}
          onChangeText={handleLocationChange}
        />
      </View>
    </>
  );
};

export default PostInput;

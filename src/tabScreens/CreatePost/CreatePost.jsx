// import React, { useEffect, useState } from "react";
// import { Alert, Text, TouchableOpacity, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import * as ImagePicker from "expo-image-picker";
// import * as Location from "expo-location";
// import {
//   ButtonDeletePost,
//   ButtonPublish,
//   Container,
//   PhotoMaker,
//   PostInput,
// } from "components";
// import styles from "styles/screens/user/createPost";

// const CreatePost = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [cameraPermission, setCameraPermission] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState("");
//   const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);
//   // const [publishedPost, setPublishedPost] = useState([]);
//   const [namePhoto, setNamePhoto] = useState("");

//   const navigation = useNavigation();

//   useEffect(() => {
//     (async () => {
//       const [cameraStatus, mediaLibraryStatus] = await Promise.all([
//         Camera.requestCameraPermissionsAsync(),
//         MediaLibrary.requestPermissionsAsync(),
//       ]);
//       setCameraPermission(cameraStatus.status === "granted");
//       setMediaLibraryPermission(mediaLibraryStatus.status === "granted");
//     })();
//   }, []);

//   const takePhoto = async () => {
//     if (!cameraPermission) {
//       Alert.alert("Access to camera denied");
//       return;
//     }

//     // if (imageUri) {
//     //   // Використовуйте закешоване зображення, якщо воно вже було отримано
//     //   return;
//     // }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (result.assets && result.assets.length > 0) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

//   const publishPost = async () => {
//     if (!imageUri) {
//       Alert.alert("Please take a photo");
//       return;
//     }
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert("Permission to access location was denied");
//         return;
//       }
//       const photoData = { uri: imageUri, title: namePhoto || "" };
//       const location = await Location.getCurrentPositionAsync({});
//       const geoCode = await Location.reverseGeocodeAsync(location.coords);
//       const region = geoCode[0]["region"];
//       const country = geoCode[0]["country"];
//       const currentGeo = `${region}, ${country}`;

//       navigation.navigate("Posts", {
//         publishPost: [photoData],
//         currentLocation: location.coords,
//         locationAddress: currentGeo,
//       });

//       setCurrentLocation(currentGeo);
//       setNamePhoto("");
//       setCurrentLocation("");
//     } catch (error) {
//       console.error("Error getting current location:", error);
//     }
//   };

//   const handleNameChange = (name) => {
//     setNamePhoto(name);
//   };

//   const handleLocationChange = (text) => {
//     setCurrentLocation(text);
//   };

//   const deletePhoto = () => {
//     setImageUri(null);
//   };

//   return (
//     <Container>
//       <View style={styles.contentWrapper}>
//         <PhotoMaker takePhoto={takePhoto} imageUri={imageUri} />
//         <View style={styles.actionElementsWrapper}>
//           <View>
//             <PostInput
//               namePhoto={namePhoto.toString()}
//               handleNameChange={handleNameChange}
//               handleLocationChange={handleLocationChange}
//               currentLocation={currentLocation}
//             />
//             <ButtonPublish imageUri={imageUri} publishPost={publishPost} />
//           </View>
//           <ButtonDeletePost deletePhoto={deletePhoto} />
//         </View>
//       </View>
//       <StatusBar style="auto" />
//     </Container>
//   );
// };

// export default CreatePost;

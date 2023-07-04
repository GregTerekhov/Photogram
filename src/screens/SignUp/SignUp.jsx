import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Alert, Keyboard, Text, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import validateForm from "utils/helpers";
import {
  FormContainer,
  AuthInputs,
  ButtonAuth,
  LinkAuth,
  Avatar,
} from "components";
import styles from "styles/screens/auth/signUp";

// const auth = getAuth();

const SignUp = () => {
  const [activeInput, setActiveInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const formData = {
    login: login,
    email: email,
    password: password,
  };

  const onAuthRegister = async () => {
    if (login === "" || email === "" || password === "") {
      setError("Email and password are mandatory");
      return;
    }
    if (validateForm(formData)) {
      // try {
      //   await createUserWithEmailAndPassword(auth, email, password);
      console.log(formData);
      Alert.alert("Успішна реєстрація", "Ви успішно зареєстровані!");
      setLogin("");
      setEmail("");
      setPassword("");
      setError("");
      setShowPassword(false);
      Keyboard.dismiss();
      navigation.navigate("Home");
      // } catch (error) {
      //   console.log("Помилка реєстрації:", error);
      //   setError(error.message);
      //   Alert.alert(
      //     "Помилка",
      //     "Виникла помилка при реєстрації. Будь ласка, спробуйте ще раз."
      //   );
      // }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleBlur = () => {
    setActiveInput("");
  };

  return (
    <React.Fragment>
      {!!error && (
        <View style={styles.error}>
          <Text>{error}</Text>
        </View>
      )}
      <FormContainer>
        <View style={styles.avatarWrapper}>
          <Avatar
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputBox}>
          <AuthInputs
            placeholder="Логін"
            value={login}
            onChangeText={(text) => setLogin(text)}
            onFocus={() => handleFocus("login")}
            onBlur={handleBlur}
            setLogin={setLogin}
            isActiveInput={activeInput === "login"}
            keyboardType="default"
          />
          <AuthInputs
            placeholder="Електронна пошта"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            isActiveInput={activeInput === "email"}
            keyboardType="default"
          />
          <AuthInputs
            placeholder="Пароль"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
            secureTextEntry
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            isActiveInput={activeInput === "password"}
            keyboardType="default"
          />
        </View>
        <ButtonAuth onPress={onAuthRegister} label="Зареєструватися" />
        <LinkAuth
          onPress={() => navigation.navigate("SignIn")}
          screen="SignUp"
        />
      </FormContainer>
      <StatusBar style="auto" />
    </React.Fragment>
  );
};

export default SignUp;

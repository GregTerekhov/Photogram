import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthInputs, ButtonAuth, FormContainer, LinkAuth } from "components";
import styles from "styles/screens/auth/signIn";

// const auth = getAuth();

const SignIn = () => {
  const [activeInput, setActiveInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const formDate = {
    email: email,
    password: password,
  };

  const validateForm = () => {
    if (!email || !password) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
      return false;
    }
    return true;
  };

  const onAuthLogin = async () => {
    if (email === "" || password === "") {
      setError("Email and password are mandatory");
      return;
    }
    if (validateForm()) {
      // try {
      //   await signInWithEmailAndPassword(auth, email, password);
      console.log(formDate);
      Alert.alert("Ви успішно увійшли у систему!");
      setEmail("");
      setPassword("");
      setShowPassword(false);
      Keyboard.dismiss();
      navigation.navigate("Home");
      // } catch (error) {
      //   console.log("Помилка входа:", error);
      //   setError(error.message);
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
    <>
      {!!error && (
        <View style={styles.error}>
          <Text>{error}</Text>
        </View>
      )}
      <FormContainer>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.inputBox}>
          <AuthInputs
            placeholder="Електронна пошта"
            value={email}
            onChangeText={setEmail}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            isActiveInput={activeInput === "email"}
          />
          <AuthInputs
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
            onFocus={() => handleFocus("password")}
            onBlur={handleBlur}
            secureTextEntry
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            isActiveInput={activeInput === "password"}
          />
        </View>
        <ButtonAuth onPress={onAuthLogin} label="Увійти" />
        <LinkAuth
          onPress={() => navigation.navigate("SignUp")}
          screen="SignIn"
        />
      </FormContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default SignIn;

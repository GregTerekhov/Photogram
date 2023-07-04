import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "styles/components/authInputs";

const AuthInputs = ({
  isActiveInput,
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  secureTextEntry,
  showPassword,
  togglePasswordVisibility,
}) => {
  const handleTogglePassword = () => {
    if (value !== "") {
      togglePasswordVisibility();
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={[styles.input, isActiveInput && styles.isActiveInput]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.togglePassword}
            onPress={handleTogglePassword}
          >
            <Text style={{ color: "#1b4371" }}>
              {showPassword ? "Сховати" : "Показати"}
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default AuthInputs;

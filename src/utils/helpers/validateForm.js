import { Alert } from "react-native";

const validateForm = (formData) => {
  const { login, email, password } = formData;
  if (!login || !email || !password) {
    Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
    return false;
  }
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    Alert.alert("Помилка", "Неправильний формат електронної пошти");
    return false;
  }
  if (password.length < 8) {
    Alert.alert("Помилка", "Пароль повинен містити щонайменше 8 символів");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    Alert.alert(
      "Помилка",
      "Пароль повинен містити щонайменше одну велику літеру"
    );
    return false;
  }
  if (!/[!@#$%^&*]/.test(password)) {
    Alert.alert(
      "Помилка",
      "Пароль повинен містити щонайменше один спеціальний символ (!@#$%^&*)"
    );
    return false;
  }
  return true;
};

export default validateForm;

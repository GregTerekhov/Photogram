import { useState } from "react";

const useAuthState = () => {
  const [activeInput, setActiveInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return {
    activeInput,
    setActiveInput,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
  };
};

export default useAuthState;

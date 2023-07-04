import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import styles from "styles/components/formContainer";

const FormContainer = ({ children }) => {
  const containerTop = "30%";

  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        contentContainerStyle={[
          styles.animatedContainer,
          { top: containerTop },
        ]}
      >
        <View style={styles.formContainer}>{children}</View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default FormContainer;

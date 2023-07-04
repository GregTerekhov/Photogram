// import "config/firebase";
import { useFonts } from "expo-font";
import { MainNavigation } from "navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoReg: require("assets/fonts/roboto-regular.ttf"),
    RobotoMed: require("assets/fonts/roboto-medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigation />;
}

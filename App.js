import { useFonts } from "expo-font";
import fonts from "./scr/global/fonts";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./scr/navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "./scr/store";
import { init } from "./scr/db";
import Toast from "react-native-toast-message"; // Asegúrate de importar correctamente Toast

init()
  .then(() => console.log("Initialized"))
  .catch((err) => console.log("Failed to initialize", err.message));

export default function App() {
  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}

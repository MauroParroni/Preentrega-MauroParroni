import { useFonts } from "expo-font";
import fonts from "./scr/global/fonts";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./scr/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import { store } from "./scr/store";

export default function App() {
    const[fontLoaded] = useFonts(fonts)


if (!fontLoaded){
  return null;
}
return (
  <Provider store={store}>
  <NavigationContainer>
<BottomTabNavigator/>
</NavigationContainer>
</Provider>
)
}

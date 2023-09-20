import StackNavigator from "./scr/navigation/stackNavigator";
import { useFonts } from "expo-font";
import fonts from "./scr/global/fonts";

export default function App() {
    const[fontLoaded] = useFonts(fonts)


if (!fontLoaded){
  return null;
}
return <StackNavigator/>
}

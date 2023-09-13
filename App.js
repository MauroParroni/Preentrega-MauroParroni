import { useState } from "react";
import { Home, Products } from "./scr/screens";
import { useFonts } from "expo-font";
import fonts from "./scr/global/fonts";

export default function App() {
    const[fontLoaded] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState("");
if (!fontLoaded){
  return null;
}
  return categorySelected ? (
    <Products category={categorySelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  );
}

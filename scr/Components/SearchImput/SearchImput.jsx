import { Pressable, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./SearchImputStyles";
const SearchImput = ({ onSearch }) => {
  useEffect(() => {
    onSearch(value);
  }, [value]);
  const [value, setValue] = useState("");
  const search = () => {
    onSearch(value);
  };

  const clearImput = () => {
    setValue("");
    onSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search product"
      />
      <View style={styles.pressable}>
        <Pressable onPress={search}>
          <AntDesign name="search1" size={25} color={"black"} />
        </Pressable>
        <Pressable onPress={clearImput}>
          <AntDesign name="closecircleo" size={25} color={"black"} />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchImput;

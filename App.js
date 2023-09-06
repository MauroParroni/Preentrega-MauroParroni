import { StatusBar } from "expo-status-bar";
import Modal from "./components/Modal";
import OptimizedList from "./components/OptimizedList";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, SetModalVisible] = useState(false);

  const onHandleDelete = () => {
    console.log(itemSelected);
    let array = itemList;
    array.splice(itemSelected, 1);
    setItemList(array);
    SetModalVisible(false);
  };
  const onHandleModal = (index) => {
    SetModalVisible(true);
    setItemSelected(index);
  };

  const onHandleChangeItem = (text) => setTextValue(text);
  const addItem = () => {
    if ( textValue === "") {
      return;
    }
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
  };
  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.TextContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.Text}>{item.value}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.TextTittle}>Estrenos de peliculas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Añadir Estrenos"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="ADD" color={"#ff0000"} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <OptimizedList listItems={itemList} renderList={renderListItem} />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 30,
    backgroundColor: "#344c62",
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 22,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  Text: {
    fontSize: 24,
    color: "white",
  },
  TextContainer: {
    alignItems: "center",
    marginVertical: 10,
    width: 430,
    borderRadius: 10,
    backgroundColor: "#ff6b6b",
  },
  TextTittle: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 20,
    color: "white",
  },
});

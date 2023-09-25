import { FlatList, View } from "react-native";
import React from "react";
import { Header } from "../../Components";
import categories from "../../data/categories";
import { CategoryItem } from "./components";
import styles from "./HomeStyles";
import Counter from "../../Components/Counter";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>

        <Header title={"Categorias"}/>
        <Counter/>
        <FlatList
          data={categories}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              navigation={navigation}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;

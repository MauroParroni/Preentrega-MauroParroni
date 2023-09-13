import { FlatList, View } from "react-native";
import React from "react";
import { Header } from "../../Components";
import categories from "../../data/categories";
import { CategoryItem } from "./components";
import styles from "./HomeStyles";

const Home = ({ setCategorySelected }) => {
  return (
    <>
      <View style={styles.container}>
        <Header title={"Categories"} />
        <FlatList
          data={categories}
          keyExtractor={(category) => category}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              setCategorySelected={setCategorySelected}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;

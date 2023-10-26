import { FlatList, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Header } from "../../Components";
import { CategoryItem } from "./components";
import styles from "./HomeStyles";
import { useGetCategoriesQuery } from "../../services/shopApi";
import AnimatedLoader from "react-native-animated-loader";
import { colors } from "../../Constants/Colors";

const Home = ({ navigation }) => {
  const visible = true;
  const { data, isLoading } = useGetCategoriesQuery();
  return (
    <>
      <View style={styles.container}>
        <Header title={"Categorias"} />
        {isLoading ? (
          <AnimatedLoader
            visible={visible}
            overlayColor={colors.quaternary}
            animationStyle={styles.lottie}
            speed={1}
          >
            <Text>Cargando...</Text>
          </AnimatedLoader>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(category) => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Home;

import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../Components";
import styles from "./detailsStyles";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "../../features/cart/cartSlice";

const Details = ({ route }) => {
  const dispatch = useDispatch();
  const { product } = route.params;

  
  const handleBuyPress = () => {
    dispatch(addItem({...product, quantity: 1}))
  }
  return (
    <>
      <Header title="Detalles"/>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          {product.images.map((imageUrl, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
          ))}
        </Swiper>
        <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.text}>Descripcion: </Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>${`${product.price}`}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() =>handleBuyPress() }>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
            </View>
      </View>
    </>
  );
};

export default Details;

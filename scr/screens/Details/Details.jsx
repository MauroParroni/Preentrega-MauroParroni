import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../Components";
import styles from "./detailsStyles";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { increment } from "../../features/counter/counterSlice";

const Details = ({ route }) => {
  const [add, setAdd] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { product } = route.params;

  /*function handleBuyPress(){
    console.log('en algun futuro va a hacer algo ')
  }*/
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
        <TouchableOpacity style={styles.buyButton} onPress={() => dispatch(increment())}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
            </View>
      </View>
    </>
  );
};

export default Details;

import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../Components";
import styles from "./detailsStyles";
import Swiper from "react-native-swiper";

const Details = ({ route }) => {
  const { product } = route.params;

  function handleBuyPress(){
    console.log('en algun futuro va a hacer algo ')
  }
  return (
    <>
      <Header title="Detalles" />
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          {product.images.map((imageUrl, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
          ))}
        </Swiper>
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>${`${product.price}`}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </>
  );
};

export default Details;

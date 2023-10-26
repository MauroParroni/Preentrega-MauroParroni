import { Pressable, Image, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import styles from "./CartItemStyles";
import { removeItem } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(removeItem(item.id));
    Toast.show({
      type: "error",
      text1: "Producto eliminado del carrito",
      visibilityTime: 2000,
      position: "bottom",
      bottomOffset: 60,
      rightOffset: 30,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.images[0] }}
          resizeMode="contain"
        />
      </View>
      {/* Línea divisoria */}
      <View style={styles.divider} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.details}>
          <Text>
            Cantidad: {item.quantity} Precio: ${item.price}
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={deleteItem}>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

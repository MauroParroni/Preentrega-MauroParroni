import { FlatList, Pressable, Text, View, Alert } from "react-native";
import React from "react";
import styles from "./CartStyles";
import { Header } from "../../Components";
import CartItem from "./components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../features/cart/cartSlice";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    const itemsList = cart.map((item) => item.title).join(", ");
    Alert.alert(
      "Confirmar Compra",
      `¿Desea realizar la compra de: ${itemsList} por un total de: $${total}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            dispatch(
              createOrder({
                cart,
                total,
                user: { user },
                title: itemsList,
              })
            );
            Alert.alert(
              "Compra Exitosa",
              "La compra se ha realizado con éxito. ¡Gracias por su compra!"
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Header title={"Carrito"} />

      {cart.length > 0 ? (
        <View>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          <View>
            <Text style={styles.totalText}>{`Total $${total}`}</Text>
          </View>
          <Pressable style={styles.confirmButton} onPress={confirmCart}>
            <Text>Confirmar</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.emptyText}>No hay artículos en el carrito</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

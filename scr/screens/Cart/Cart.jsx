import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./CartStyles";
import { Header } from "../../Components";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [triggerPost, result] = usePostOrderMutation();

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({ total, cart, user: "loggedUser" });
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

import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./CartStyles";
import { Header } from "../../Components";
import cart from "../../data/cart";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const counter = useSelector((state) => state.counter.value);
  const renderItem = () => <CartItem/>
  
  return (
    <View style={styles.container}>
      <Header title={"Carrito"} />
      <Text>Cantidad de elementos añadidos al carrito: {counter}</Text>
      <View>
        <FlatList 
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}/>
      </View>
      <View>
        <Pressable>
          <Text>Confirmar</Text>
          <View>
            <Text>{`Total $100`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./CartStyles";
import { Header } from "../../Components";
import cart from "../../data/cart";
import CartItem from "./components/CartItem";

const Cart = () => {
  const renderItem = () => <CartItem/>
  
  return (
    <View style={styles.container}>
      <Header title={"Carrito"} />
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

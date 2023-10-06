import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./CartStyles";
import { Header } from "../../Components";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
    const cart = useSelector( state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const [triggerPost, result] = usePostOrderMutation()

  const renderItem = ({item}) => <CartItem item ={item}/>
  
  const confirmCart =() =>{
    triggerPost({total, cart, user: "loggedUser"})
  }
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
        <Pressable style = {styles.confirmButton} onPress={confirmCart}>
          <Text>Confirmar</Text>
          </Pressable>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        
      </View>
    </View>
  );
};

export default Cart;

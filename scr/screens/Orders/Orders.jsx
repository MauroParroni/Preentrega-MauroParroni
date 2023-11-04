import {  Text, View, TouchableOpacity,  ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OrdersStyles";
import { Header } from "../../Components";
import { clearOrders } from "../../features/cart/cartSlice";

const Orders = () => {
  const { updateAt, orders } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClearOrders = () => {
    dispatch(clearOrders());
  };
  const totalOrders = orders.reduce((acc, order) => acc + order.total, 0);
  return (
    <>
      <Header title={"Orders"} />
      
      <ScrollView style={styles.container}>
        {orders.length > 0 ? (
          <>
            <Text style={styles.userInfo}>User: {user}</Text>
            <Text style={styles.info}>Last Updated: {updateAt}</Text>
            <Text style={styles.orderText}>Ordenes de compra: </Text>
            {orders.map((order, index) => (
              <View key={index} style={styles.orderContainer}>
                <Text style={styles.orderText}>Date: {order.date}</Text>
                <Text style={styles.orderInfo}>Total: ${order.total}</Text>
                <Text style={styles.orderInfo}>Items:</Text>
                {order.items.map((item) => (
                  <Text key={item.id} style={styles.orderInfo}>
                    <Text>Producto: {item.title}</Text>
                    {"\n"}
                    <Text>{`Cantidad: ${item.quantity}`}</Text>
                    {"\n"}
                    <Text>{`Precio unitario: $${item.price}`}</Text>
                  </Text>
                ))}
              </View>
            ))}
            <Text style={styles.total}>Total de la compra: ${totalOrders}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleClearOrders}
            >
              <Text style={styles.buttonText}>Eliminar Ordenes</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.noOrderContainer}>
            <Text style={styles.noOrderText}>
              No hay ninguna orden pendiente.
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Orders;

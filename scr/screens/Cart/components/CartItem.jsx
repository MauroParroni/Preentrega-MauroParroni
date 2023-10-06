import { Pressable, Image, Text, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import styles from './CartItemStyles';

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.images[0] }}
          resizeMode='contain'
        />
      </View>
      {/* Línea divisoria */}
      <View style={styles.divider} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.details}>
          <Text>Cantidad: {item.quantity}     Precio: ${item.price}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Pressable>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

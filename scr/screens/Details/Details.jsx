import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from '../../Components'
import styles from './detailsStyles'

const Details = ({product}) => {
  return (
    <>
    <Header title='Detalles'/>
    <View style ={styles.container}>
      <Image style={styles.image} source={product.images[0]}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style ={styles.price}>${`${product.price}`}</Text>
    </View>
    </>
  )
}

export default Details
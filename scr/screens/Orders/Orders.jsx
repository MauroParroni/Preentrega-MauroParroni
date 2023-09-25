import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './OrdersStyles'
import { Header } from '../../Components'

const Orders = () => {
  return (
    <View style ={styles.container}>
        <Header title={'Orders'}/>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders
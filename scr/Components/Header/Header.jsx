import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../Header/headerStyles'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header


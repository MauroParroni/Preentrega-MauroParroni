import { Pressable,  Text, useWindowDimensions} from 'react-native'
import React, { useEffect } from 'react'
import {Card} from '../../../../Components'
import styles from './CategoryItemStyles'


const CategoryItem = ({category, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate('Productos',{category})}>
     <Card style ={styles.cardContainer}>
     <Text style ={styles.text}>{category}</Text>
        </Card>   
    </Pressable>
  )
}

export default CategoryItem


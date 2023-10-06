import { Pressable,  Text, useWindowDimensions} from 'react-native'
import React, { useEffect } from 'react'
import {Card} from '../../../../Components'
import styles from './CategoryItemStyles'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../../../features/shop/shopSlice'


const CategoryItem = ({category, navigation}) => {
  const dispatch = useDispatch()
  return (
    <Pressable onPress={() => {
      dispatch(setCategorySelected(category))
      navigation.navigate('Productos',{category})}}>
     <Card style ={styles.cardContainer}>
     <Text style ={styles.text}>{category}</Text>
        </Card>   
    </Pressable>
  )
}

export default CategoryItem


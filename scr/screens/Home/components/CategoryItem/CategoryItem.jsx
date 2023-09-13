import { Pressable,  Text} from 'react-native'
import React from 'react'
import {Card} from '../../../../Components'
import styles from './CategoryItemStyles'

const CategoryItem = ({category, setCategorySelected}) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
     <Card style ={styles.cardContainer}>
     <Text style ={styles.text}>{category}</Text>
        </Card>   
    </Pressable>
  )
}

export default CategoryItem


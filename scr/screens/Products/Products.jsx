import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from '../../data/products'
import { Header, SearchImput } from "../../Components";
import styles from './ProductsStyles'
import { Button } from "react-native";
import { colors } from "../../Constants/Colors";


const Products = ({ route, navigation}) => {
    const [arrProducts, setArrProducts] = useState([]);
    const [keywords, setKeywords] = useState("");
    const {category} = route.params
  
    useEffect(() => {
      if (category) {
        const products = allProducts.filter(product => product.category === category);
        const productsFiltered = products.filter(product => product.title && product.title.includes(keywords));
        setArrProducts(productsFiltered);
      } else {
        const productsFiltered = allProducts.filter(product => product.title && product.title.includes(keywords));
        setArrProducts(productsFiltered);
      }
    }, [category, keywords]);
  
    return (
      <View style={styles.container}>
        <Header title={category} />
        <SearchImput onSearch={setKeywords} />
        <View style ={styles.listContainer}>
          <FlatList
            data={arrProducts}
            renderItem={({ item }) => (
              <View style ={styles.productList} >
                 <Image style={styles.productImage}
                source={{
                  uri : item.thumbnail
                  }}/>
                  <View style ={styles.productdesc}>
                <Text style ={styles.productText}>{item.title}</Text>
                <Text style ={styles.productText}>Precio: {item.price}$</Text>
                <Button title="Ver Producto" color={colors.primary} onPress={() => navigation.navigate('Details', {product: item})}/>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  };
  
  export default Products;
  
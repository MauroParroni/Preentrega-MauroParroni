import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from '../../data/products'
import { Header, SearchImput } from "../../Components";
import styles from './ProductsStyles'


const Products = ({ category, setProductSelected}) => {
    const [arrProducts, setArrProducts] = useState([]);
    const [keywords, setKeywords] = useState("");
  
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
              <TouchableOpacity style ={styles.productList} onPress={() => setProductSelected(item)}>
                <Text style ={styles.productText}>{item.title}</Text>
                <Image style={styles.productImage}
                source={{
                  uri : item.thumbnail
                  }}/>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  };
  
  export default Products;
  
import { FlatList, Text, View, Image} from "react-native";
import React, { useEffect, useState } from "react";
import { Header, SearchImput } from "../../Components";
import styles from './ProductsStyles';
import { Button } from "react-native";
import { colors } from "../../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { setProductIdSelected } from "../../features/shop/shopSlice";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";
import AnimatedLoader from "react-native-animated-loader";


const Products = ({ route, navigation}) => {
  const visible = true;
  const dispatch = useDispatch();
  const category = useSelector(state => state.shop.categorySelected);
  const [keywords, setKeywords] = useState("");
  const { data, isLoading} = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (data) {
     /* const productsFiltered = data.filter( (product) =>
        product.title.includes(keywords)
      );*/
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchImput onSearch={setKeywords} />
      <View style={styles.listContainer}>
        {isLoading ? (
          <AnimatedLoader
          visible={visible}
          overlayColor= {colors.quaternary}
          animationStyle={styles.lottie}
          speed={1}>
          <Text>Cargando...</Text>
        </AnimatedLoader>
        ) : (
          <FlatList
            data={data ? Object.values(data) : []}
            renderItem={({ item }) => (
              <View style={styles.productList}>
                <Image
                  style={styles.productImage}
                  source={{
                    uri: item.thumbnail
                  }}
                />
                <View style={styles.productdesc}>
                  <Text style={styles.productText}>{item.title}</Text>
                  <Text style={styles.productText}>Precio: {item.price}$</Text>
                  <Button
                    title="Ver Producto"
                    color={colors.primary}
                    onPress={() => {
                      dispatch(setProductIdSelected(item.id));
                      navigation.navigate('Details', { product: item });
                    }}
                  />
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Products;

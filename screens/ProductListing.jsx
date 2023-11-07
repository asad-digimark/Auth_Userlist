import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Product from '../components/Product';
import firestore from '@react-native-firebase/firestore';

export default ({navigation: {navigate}}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  const getProducts = async () => {
    try {
      const products = [];
      const querySnapshot = await firestore().collection('Products').get();
      querySnapshot.forEach(product =>
        products.push({id: product.id, ...product.data()}),
      );
      return products;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={{flex: 1}} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Product
              product={item}
              onPress={() => navigate('Product Details', item)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});

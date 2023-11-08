import {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Product from '../components/Product';
import firestore from '@react-native-firebase/firestore';
import EmptyList from '../components/EmptyList';

export default ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Products')
      .onSnapshot(onResult, onError);
    return () => subscriber();
  }, []);

  const onResult = querySnapshot => {
    const products = [];
    querySnapshot.forEach(product =>
      products.push({id: product.id, ...product.data()}),
    );
    setProducts(products);
    setLoading(false);
  };

  const onError = e => {
    console.error(e);
    setLoading(false);
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
              onPress={() => navigation.navigate('Details', item)}
            />
          )}
          ListEmptyComponent={
            <EmptyList onPress={() => navigation.replace('Add Product')} />
          }
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

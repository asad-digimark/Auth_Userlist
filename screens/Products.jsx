import {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Text,
} from 'react-native';
import Product from '../components/Product';
import firestore from '@react-native-firebase/firestore';
import EmptyList from '../components/EmptyList';
import FormInput from '../components/FormInput';

export default ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
    setFilteredProducts(products);
  };

  const onError = e => {
    console.error(e);
    setLoading(false);
  };

  return loading ? (
    <ActivityIndicator size="large" style={{flex: 1}} />
  ) : (
    <View style={styles.container}>
      <FormInput
        placeholder="Search"
        iconLeft="search1"
        onChangeText={text => {
          if (text) {
            setFilteredProducts(
              products.filter(p =>
                p.name.toLowerCase().includes(text.toLowerCase()),
              ),
            );
          } else {
            setFilteredProducts(products);
          }
        }}
      />
      <FlatList
        data={filteredProducts}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
});

import {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Button,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';
import {padding} from '../utils/constants';
import ModalProduct from '../components/ModalProduct';

export default ({setSelectedProducts, toggleModal}) => {
  const [products, setProducts] = useState([]);
  const [selection, setSelection] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedProducts([]);
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

  const handleAdd = () => {
    console.log('sel-> ', selection);
    setSelectedProducts(selection);
    toggleModal();
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
              products.filter(
                p =>
                  p.name.search(RegExp(text, 'i')) >= 0 ||
                  p.brand.search(RegExp(text, 'i')) >= 0,
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
          <ModalProduct
            product={item}
            selection={selection}
            setSelection={setSelection}
          />
        )}
        ListEmptyComponent={<Text>Empty</Text>}
      />
      <View style={styles.footer}>
        <Button title="Close" onPress={toggleModal} color="red" />
        <Button title={'Add ' + selection.length} onPress={handleAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding,
    gap: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
});

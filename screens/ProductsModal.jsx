import {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
  Text,
  ToastAndroid,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';
import {padding} from '../utils/constants';
import storage from '@react-native-firebase/storage';
import ModalProduct from '../components/ModalProduct';

export default ({selection, setSelection, setModal}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelection([]);
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
        renderItem={({item, index}) => (
          <ModalProduct
            product={item}
            selection={selection}
            setSelection={setSelection}
          />
        )}
        ListEmptyComponent={<Text>Empty</Text>}
      />
      <View style={styles.footer}>
        <Button title="Close" onPress={() => setModal(false)} color="red" />
        <Button title={'Add ' + selection.length} />
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

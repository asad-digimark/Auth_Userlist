import {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';
import Product from '../components/Product';
import firestore from '@react-native-firebase/firestore';
import EmptyList from '../components/EmptyList';
import FormInput from '../components/FormInput';
import {padding} from '../utils/constants';

export default ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selection, setSelection] = useState([]);

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
          <Product
            product={item}
            onPress={() => navigation.navigate('Details', item)}
            selection={selection}
            setSelection={setSelection}
            index={index}
          />
        )}
        ListEmptyComponent={
          <EmptyList onPress={() => navigation.replace('Add Product')} />
        }
      />
      {selection.length > 0 && (
        <Footer products={selection} setSelection={setSelection} />
      )}
    </View>
  );
};

const Footer = ({products, setSelection}) => {
  const handleDelete = async () => {
    Alert.alert('Confirm Deletion', 'Are you sure to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {onPress: deleteProduct, text: 'Delete', style: 'destructive'},
    ]);
  };

  const deleteProduct = async () => {
    const batch = firestore().batch();

    products.forEach(id => {
      const docRef = firestore().collection('Products').doc(id);
      batch.delete(docRef);
    });

    try {
      setSelection([]);
      const res = await batch.commit();
      Alert.alert(undefined, 'Products deleted successfully');
    } catch (error) {
      console.error('Error deleting items:', error);
    }
  };

  return (
    <View style={styles.footer}>
      <Button
        title={`Delete ${products.length}`}
        color="red"
        onPress={handleDelete}
      />
      <Button title="Cancel" onPress={() => setSelection([])} />
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

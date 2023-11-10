import {View, Text, StyleSheet, SafeAreaView, Image, Alert} from 'react-native';
import {firestoreDate} from '../utils/constants';
import FormButton from '../components/FormButton';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';
import {padding} from '../utils/constants';

export default ({navigation, route: {params: product}}) => {
  const handleDelete = async () => {
    Alert.alert('Confirm Deletion', 'Are you sure to delete this product?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {onPress: deleteProduct, text: 'Delete', style: 'destructive'},
    ]);
  };

  const deleteProduct = async () => {
    try {
      const res = await firestore()
        .collection('Products')
        .doc(product.id)
        .delete();
      ToastAndroid.show('Success', ToastAndroid.SHORT);
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.name}>{product.name} </Text>
      <View style={styles.details}>
        <View style={styles.tr}>
          <Text style={styles.td}>Brand</Text>
          <Text style={styles.td}>Purchase Price</Text>
          <Text style={styles.td}>Purchase Date</Text>
          <Text style={styles.td}>Sale Price</Text>
          <Text style={styles.td}>Buyer Name</Text>
          <Text style={styles.td}>Buyer Number</Text>
          <Text style={styles.td}>Quantity</Text>
        </View>
        <View style={styles.tr}>
          <Text style={styles.th}>{product.brand}</Text>
          <Text style={styles.th}>{product.purchasePrice} Rs.</Text>
          <Text style={styles.th}>{firestoreDate(product.purchaseDate)}</Text>
          <Text style={styles.th}>{product.salePrice} Rs.</Text>
          <Text style={styles.th}>{product.buyerName}</Text>
          <Text style={styles.th}>{product.buyerNo}</Text>
          <Text style={styles.th}>{product.quantity}</Text>
        </View>
      </View>
      <FormButton
        title="Delete"
        backgroundColor="#ccc"
        onPress={handleDelete}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding,
    gap: 16,
    backgroundColor: '#f7f7f7',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
  },
  details: {
    flexDirection: 'row',
    flex: 1,
  },
  tr: {
    flex: 0.5,
  },
  th: {
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    fontWeight: '500',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  td: {
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    fontSize: 16,
    flexWrap: 'wrap',
    textAlignVertical: 'center',
  },
});

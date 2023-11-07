import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';

import FormButton from '../components/FormButton';

import DatePicker from 'react-native-date-picker';

import firestore from '@react-native-firebase/firestore';

const AddProductScreen = ({navigation}) => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    purchasePrice: '',
    purchaseDate: '',
    salePrice: '',
    buyerName: '',
    buyerNo: '',
    quantity: '',
    image: '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addProduct = async () => {
    try {
      const res = await firestore().collection('Products').add(product);
      console.warn('Product added!', res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text>Add Product</Text>
        <FormInput
          placeholder="Product Name"
          value={product.name}
          onChangeText={text => setProduct({...product, name: text})}
        />
        <FormInput
          placeholder="Brand"
          value={product.brand}
          onChangeText={text => setProduct({...product, brand: text})}
        />
        <FormInput
          placeholder="Purchase Price"
          value={product.purchasePrice}
          onChangeText={text => setProduct({...product, purchasePrice: text})}
          keyboardType="numeric"
        />
        <FormInput
          placeholder="Sale Price"
          value={product.salePrice}
          onChangeText={text => setProduct({...product, salePrice: text})}
          keyboardType="numeric"
        />
        <FormInput
          placeholder="Buyer Name"
          value={product.buyerName}
          onChangeText={text => setProduct({...product, buyerName: text})}
        />
        <FormInput
          placeholder="Buyer Number"
          value={product.buyerNo}
          onChangeText={text => setProduct({...product, buyerNo: text})}
          keyboardType="numeric"
        />
        <FormInput
          placeholder="Quantity"
          value={product.quantity}
          onChangeText={text => setProduct({...product, quantity: text})}
          keyboardType="numeric"
        />
        <FormInput
          placeholder="Purchase Date"
          value={
            product.purchaseDate ? product.purchaseDate.toDateString() : ''
          }
          iconRight="calendar"
          onRightIconPress={() => setShowDatePicker(true)}
        />
        <DatePicker
          open={showDatePicker}
          modal
          style={styles.datePicker}
          date={product.purchaseDate || new Date()}
          mode="date"
          format="YYYY-MM-DD"
          onConfirm={date => {
            setShowDatePicker(false);
            setProduct({...product, purchaseDate: date});
          }}
          onCancel={() => setShowDatePicker(false)}
        />
        <FormButton
          title="Add Product"
          onPress={addProduct}
          backgroundColor="#0275d8"
          color="#fff"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
});

export default AddProductScreen;

import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import DatePicker from 'react-native-date-picker';
import firestore from '@react-native-firebase/firestore';
import {validateProduct} from '../validation';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {padding} from '../utils/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const addProduct = async () => {
    setLoading(true);
    try {
      await firestore().collection('Products').add(product);
      Alert.alert(undefined, 'Product added succesfully.', [
        {
          onPress: () => navigation.replace('Products'),
        },
      ]);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 100,
        height: 200,
        compressImageQuality: 0.6,
        cropping: true,
        freeStyleCropEnabled: true,
      });
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);

      let filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      const extension = filename.split('.').pop();
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;

      const task = storage().ref(filename).putFile(imageUri);
      // task.on('state_changed', snapshot => {
      //   console.log(
      //     Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      //   );
      // });

      await task;
      const url = await storage().ref(filename).getDownloadURL();

      setProduct(prev => ({...prev, image: url}));
    } catch (e) {}
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}>
          {image ? (
            <Image
              source={{uri: image}}
              style={{
                width: 60,
                height: 56,
                backgroundColor: '#ccc',
                borderRadius: 12,
              }}
            />
          ) : (
            <View
              style={{
                width: 60,
                height: 56,
                backgroundColor: '#ccc',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome name="image" size={48} />
            </View>
          )}
          {image ? (
            <TouchableOpacity
              onPress={() => {
                setImage('');
                setProduct(prev => ({...prev, image: ''}));
              }}>
              <Text>Remove</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Text>Add Image</Text>
            </TouchableOpacity>
          )}
        </View>
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
          title="Add New Product"
          onPress={addProduct}
          backgroundColor="#0275d8"
          disabled={!validateProduct(product) || loading}
          color="#fff"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding,
    gap: 12,
    alignItems: 'center',
  },
});

export default AddProductScreen;

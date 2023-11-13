import CheckBox from '@react-native-community/checkbox';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import QuantitySelector from './QuantitySelector';
import {useState} from 'react';

export default ({product, setSelection}) => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);

  const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
    if (checked) {
      setSelection(prev =>
        prev.map(p =>
          p.id === product.id ? {...p, quantity: newQuantity} : p,
        ),
      );
    }
  };

  const toggleChecked = () => {
    if (checked) {
      setSelection(prev => prev.filter(({id}) => id !== product.id));
    } else {
      setSelection(prev => [...prev, {...product, quantity}]);
    }
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.product} onPress={toggleChecked}>
      <CheckBox value={checked} onValueChange={toggleChecked} />
      <Image source={{uri: product.image}} style={styles.image} />
      <Text
        style={[
          styles.td,
          {
            width: '26%',
            marginLeft: 4,
          },
        ]}>
        {product.name}
      </Text>
      <Text
        style={[
          styles.td,
          {
            width: '24%',
          },
        ]}>
        {product.brand}
      </Text>
      <Text
        style={[
          styles.td,
          {
            width: '20%',
          },
        ]}>
        {product.salePrice} Rs.
      </Text>
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  td: {
    fontSize: 16,
  },
});

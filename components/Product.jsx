import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default ({product, onPress}) => {
  return (
    <TouchableOpacity style={styles.product} onPress={onPress}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.td}>{product.name}</Text>
      <Text style={styles.td}>{product.brand}</Text>
      <Text style={styles.td}>{product.salePrice} Rs.</Text>
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
    justifyContent: 'space-around',
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

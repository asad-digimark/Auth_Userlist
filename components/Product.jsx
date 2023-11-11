import CheckBox from '@react-native-community/checkbox';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default ({product, onPress, selection, setSelection}) => {
  const handlePress = () => (selection.length ? toggleSelect() : onPress());

  const toggleSelect = () => {
    if (isChecked) {
      setSelection(prev => prev.filter(({id}) => id !== product.id));
    } else {
      setSelection(prev => [...prev, {id: product.id, image: product.image}]);
    }
  };

  const isChecked = Boolean(selection.find(({id}) => id === product.id));

  return (
    <TouchableOpacity
      style={styles.product}
      onPress={handlePress}
      onLongPress={() =>
        setSelection([...selection, {id: product.id, image: product.image}])
      }>
      {selection.length > 0 && (
        <CheckBox value={isChecked} onValueChange={toggleSelect} />
      )}
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

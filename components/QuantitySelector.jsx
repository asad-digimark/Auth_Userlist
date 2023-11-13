import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default ({quantity, onQuantityChange}) => {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIncrease}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={handleDecrease}>
        <Text style={styles.button}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
  },
});

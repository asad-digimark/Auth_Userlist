import FormButton from './FormButton';

import {View, Text, StyleSheet} from 'react-native';
export default ({onPress}) => (
  <View style={styles.container}>
    <Text style={styles.emptyText}>Product List is empty.</Text>
    <FormButton
      title="Add Product"
      backgroundColor="#777"
      color="#fff"
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
  },
});

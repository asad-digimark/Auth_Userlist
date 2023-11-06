import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default ({navigation}) => {
  // Fetch the list of products from your data store or API
  const products = [
    {id: 1, name: 'Product 1', description: 'Description 1'},
    {id: 2, name: 'Product 2', description: 'Description 2'},
    // Add more products here
  ];

  return (
    <View style={styles.container}>
      <Text>Product Listing</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productItem: {
    marginBottom: 20,
  },
});

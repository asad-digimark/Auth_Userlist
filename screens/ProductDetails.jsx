import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {firestoreDate} from '../utils/constants';

export default ({navigation, route: {params: product}}) => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 18,
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

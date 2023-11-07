import {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';

export default ({navigation, route: {params: product}}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.name}>Product Name</Text>
      <View style={styles.details}>
        <View style={styles.tr}>
          <Text style={styles.th}>Brand</Text>
          <Text style={styles.th}>Purchase Date</Text>
          <Text style={styles.th}>Purchase Price</Text>
          <Text style={styles.th}>Sale Price</Text>
          <Text style={styles.th}>Purchase Price</Text>
        </View>
        <View style={styles.tr}>
          <Text style={styles.td}>Brand</Text>
          <Text style={styles.td}>Purchase Date</Text>
          <Text style={styles.td}>Purchase Price</Text>
          <Text style={styles.td}>Sale Price</Text>
          <Text style={styles.td}>Purchase Price</Text>
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
    backgroundColor: 'red',
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

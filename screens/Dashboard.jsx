import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

export default ({navigation: {navigate}, route: {params: product}}) => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTile title="Products" onPress={() => navigate('Products')} />
      <DashboardTile
        title="Add Product"
        onPress={() => navigate('Add Product')}
      />
      <DashboardTile title="Invoice" />
    </SafeAreaView>
  );
};

const DashboardTile = ({title, onPress}) => {
  return (
    <TouchableHighlight style={styles.box} onPress={onPress}>
      <Text style={styles.boxText}>{title} </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 18,
    gap: 16,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '45%',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

import {StyleSheet, SafeAreaView} from 'react-native';
import DashboardTile from '../components/DashboardTile';

export default ({navigation: {navigate}, route: {params: product}}) => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTile title="Products" onPress={() => navigate('Products')} />
      <DashboardTile
        title="Add Product"
        onPress={() => navigate('Add Product')}
      />
      <DashboardTile title="Invoice" onPress={() => navigate('Invoice')} />
    </SafeAreaView>
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
});

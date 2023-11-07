import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import Profile from './Profile';
import {useAuthContext} from '../auth/AuthProvider';
import {View, Button, Image} from 'react-native';
import AddProduct from '../screens/AddProduct';
import ProductListing from '../screens/ProductListing';
import ProductDetails from '../screens/ProductDetails';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Users"
        component={UserList}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Add Product" component={AddProduct} />
      <Stack.Screen name="Product Listing" component={ProductListing} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const HeaderRight = () => {
  const {
    user: {photoURL},
    logout,
  } = useAuthContext();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}>
      {photoURL && (
        <Image
          source={{uri: photoURL}}
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
          }}
        />
      )}
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

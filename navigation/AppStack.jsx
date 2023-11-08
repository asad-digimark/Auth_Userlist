import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import Profile from './Profile';
import {useAuthContext} from '../auth/AuthProvider';
import {View, Button, Image} from 'react-native';
import AddProduct from '../screens/AddProduct';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import Dashboard from '../screens/Dashboard';
import Invoices from '../screens/Invoices';
import CreateInvoice from '../screens/CreateInvoice';

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
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen name="Add Product" component={AddProduct} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen name="Invoices" component={Invoices} />
      <Stack.Screen name="Create Invoice" component={CreateInvoice} />
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

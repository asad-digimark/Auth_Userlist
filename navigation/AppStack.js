import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Users" component={UserList} />
    </Stack.Navigator>
  );
};

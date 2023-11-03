import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import Profile from './Profile';
import {useAuthContext} from '../auth/AuthProvider';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

export default () => {
  const {logout} = useAuthContext();
  return (
    <Stack.Navigator initialRouteName="Users done">
      <Stack.Screen
        name="Users"
        component={UserList}
        options={{
          headerRight: () => <Button title="Logout" onPress={logout} />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

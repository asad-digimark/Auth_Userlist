import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import Profile from './Profile';
import {useAuthContext} from '../auth/AuthProvider';
import {View, Button, Image} from 'react-native';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen
        name="Users"
        component={UserList}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
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

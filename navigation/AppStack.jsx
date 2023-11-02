import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';
import FormButton from '../components/FormButton';
import {useAuthContext} from '../auth/AuthProvider';

const Stack = createNativeStackNavigator();

export default () => {
  const {logout} = useAuthContext();
  return (
    <Stack.Navigator initialRouteName="Users done">
      <Stack.Screen
        name="Users"
        component={UserList}
        options={{
          headerRight: () => (
            <FormButton
              title="Logout"
              color="skyblue"
              backgroundColor="#fff"
              onPress={logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

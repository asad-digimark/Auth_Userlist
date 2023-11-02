import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screens/UserList';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Users one"
      options={{
        title: 'Home Screen Title',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
        },
      }}>
      <Stack.Screen name="Users" component={UserList} />
    </Stack.Navigator>
  );
};

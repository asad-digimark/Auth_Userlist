import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import User from '../components/User';
import FormInput from '../components/FormInput';
import {URL} from '../config';

export default ({navigation: {navigate}}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users.length ? (
    <View
      style={{
        padding: 8,
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <FormInput placeholder="Search" icon="search1" backgroundColor="#fff" />
      <FlatList
        data={users}
        renderItem={({item}) => (
          <User user={item} onPress={() => navigate('Profile', item)} />
        )}
      />
    </View>
  ) : null;
};

import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import User from '../components/User';
import {BASE_URL} from '../config';

export default ({navigation: {navigate}}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users.length ? (
    <FlatList
      data={users}
      renderItem={({item}) => (
        <User user={item} onPress={() => navigate('Profile', item)} />
      )}
    />
  ) : null;
};

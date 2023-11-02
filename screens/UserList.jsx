import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import User from '../components/User';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users.length ? (
    <FlatList data={users} renderItem={({item}) => <User user={item} />} />
  ) : null;
};

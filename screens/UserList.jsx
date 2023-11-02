import {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import User from './User';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users.length ? (
    <FlatList
      data={users}
      renderItem={({item}) => <User user={item} style={styles.container} />}
    />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 4,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
  },
});

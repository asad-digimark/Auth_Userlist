import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return users.length ? (
    <FlatList data={users} renderItem={({item}) => <User user={item} />} />
  ) : null;
};

const User = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar_url}} style={styles.image} />
      <View>
        <Text style={styles.nameText}>{user.login}</Text>
        <Text style={styles.subtitle}>{user.url}</Text>
      </View>
    </View>
  );
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  subtitle: {
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});

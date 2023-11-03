import {Text, View, StyleSheet, Image, Button} from 'react-native';

export default ({route: {params: user}}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar_url}} style={styles.image} />
      <Text style={styles.nameText}>{user.login}</Text>
      <View style={styles.btnGroup}>
        <Button title="Like" />
        <Button title="Follow" color="#333" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  nameText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 16,
  },
});

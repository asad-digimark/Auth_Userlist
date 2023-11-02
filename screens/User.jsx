import {View, Image, Text, StyleSheet} from 'react-native';

export default ({user}) => {
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameText: {
    fontSize: 22,
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

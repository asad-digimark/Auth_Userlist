import {TouchableHighlight, StyleSheet, Text} from 'react-native';

export default ({title, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="#ccc"
      style={styles.box}
      onPress={onPress}>
      <Text style={styles.boxText}>{title} </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '45%',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

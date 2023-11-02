import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const height = Dimensions.get('window').height / 16;

export default ({title, backgroundColor, color, ...rest}) => (
  <TouchableOpacity
    style={[
      styles.btnContainer,
      {backgroundColor, opacity: rest.disabled ? 0.7 : 1},
    ]}
    {...rest}>
    <Text style={[styles.btnText, {color}]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnContainer: {
    height,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

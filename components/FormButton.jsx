import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {height} from '../utils/constants';

export default ({title, backgroundColor, icon, color, ...rest}) => (
  <TouchableOpacity
    style={[
      styles.btnContainer,
      {backgroundColor, opacity: rest.disabled ? 0.7 : 1},
    ]}
    {...rest}>
    {icon && (
      <FontAwesome name={icon} size={24} style={{alignSelf: 'center'}} />
    )}
    <Text style={[styles.btnText, {color}]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnContainer: {
    height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  btnText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

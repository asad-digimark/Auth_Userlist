import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const height = Dimensions.get('window').height / 16;

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
    <Text style={[styles.btnText, {color, flex: icon ? 1 : 0}]}>{title}</Text>
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
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

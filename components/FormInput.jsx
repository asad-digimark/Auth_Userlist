import {View, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height / 16;

export default ({icon, ...rest}) => {
  return (
    <View style={styles.input}>
      {icon && (
        <AntDesign name={icon} size={24} style={{alignSelf: 'center'}} />
      )}
      <TextInput
        {...rest}
        style={{
          flex: 1,
          fontSize: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height,
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
  },
});

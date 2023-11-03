import {View, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {height} from '../utils/constants';
import {useState} from 'react';

export default ({icon, secureTextEntry, ...rest}) => {
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.input}>
      {icon && <AntDesign name={icon} size={24} style={styles.icon} />}
      <TextInput
        secureTextEntry={secureTextEntry ? secure : false}
        {...rest}
        style={{
          flex: 1,
          fontSize: 16,
        }}
      />
      {secureTextEntry && (
        <TouchableHighlight
          style={styles.eyeBtn}
          underlayColor="none"
          onPress={() => setSecure(prev => !prev)}>
          <FontAwesome
            name={secure ? 'eye' : 'eye-slash'}
            size={20}
            style={styles.icon}
          />
        </TouchableHighlight>
      )}
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
  eyeBtn: {
    alignSelf: 'center',
    marginRight: 6,
  },
  icon: {alignSelf: 'center'},
});

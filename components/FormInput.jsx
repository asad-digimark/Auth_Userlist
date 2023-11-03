import {View, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {height} from '../utils/constants';

export default ({icon, secureTextEntry, ...rest}) => {
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.input}>
      {icon && (
        <AntDesign name={icon} size={24} style={{alignSelf: 'center'}} />
      )}
      <TextInput
        {...rest}
        secureTextEntry={secureTextEntry ? secure : false}
        style={{
          flex: 1,
          fontSize: 16,
        }}
      />
      {secureTextEntry && (
        <ShowHidePassword show={secure} setShow={setSecure} />
      )}
    </View>
  );
};

const ShowHidePassword = ({show, setShow}) => (
  <TouchableHighlight
    style={{alignSelf: 'center'}}
    underlayColor="transparent"
    onPress={() => setShow(prev => !prev)}>
    <FontAwesome name={show ? 'eye' : 'eye-slash'} size={20} />
  </TouchableHighlight>
);

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

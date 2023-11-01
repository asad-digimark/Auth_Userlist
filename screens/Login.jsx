import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {useState} from 'react';
const windowHeight = Dimensions.get('window').height;

export default ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <FormInput
        placeholder="Email"
        icon="user"
        value={email}
        keyboardType="email-address"
        onChangeText={v => setEmail(v)}
      />
      <FormInput
        placeholder="Password"
        icon="lock"
        value={password}
        secureTextEntry
        onChangeText={v => setPassword(v)}
      />
      <FormButton title="Login" backgroundColor="#2e64e5" color="#fff" />
      <FormButton title="Forgot Password" color="#2e64e5" />
      <FormButton
        title="Don't have an account? Create here"
        color="#2e64e5"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const FormButton = ({title, backgroundColor, color, ...rest}) => (
  <TouchableOpacity style={[styles.btnContainer, {backgroundColor}]} {...rest}>
    <Text style={[styles.btnText, {color}]}>{title}</Text>
  </TouchableOpacity>
);

const FormInput = ({icon, ...rest}) => {
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  btnContainer: {
    height: windowHeight / 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    height: windowHeight / 16,
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
  },
});

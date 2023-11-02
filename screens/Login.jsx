import {StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

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
});

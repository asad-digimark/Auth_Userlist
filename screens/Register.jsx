import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {useState} from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Register</Text>
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
        <FormInput
          placeholder="Confirm Password"
          icon="lock"
          value={confirmPassword}
          secureTextEntry
          onChangeText={v => setConfirmPassword(v)}
        />
        <FormButton
          title="Sign Up"
          backgroundColor="#2e64e5"
          color="#fff"
          onPress={() => {
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }}
        />
        <Text style={{textAlign: 'center'}}>
          By registering, you confirm that you accept our Terms of service and
          Privacy Policy
        </Text>
        <FormButton
          title="Sign In with Google"
          icon="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
        />
        <FormButton
          title="Sign In with Facebook"
          icon="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
        />
        <FormButton
          title="Have an account? Sign In"
          color="#2e64e5"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

import {View, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {padding} from '../utils/constants';

export default () => {
  return (
    <View style={styles.container}>
      <FormInput />
      <FormButton title="Create" color="#fff" backgroundColor="#333" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding,
  },
});

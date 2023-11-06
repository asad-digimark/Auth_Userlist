import DatePicker from 'react-native-date-picker';
import FormInput from './FormInput';
import {View} from 'react-native/Libraries/Components/View/View';

export default () => {
  return (
    <View>
      <FormInput
        placeholder="Purchase Date"
        value={product.purchaseDate.toDateString()}
        iconRight="calendar"
        onRightIconPress={() => setShowDatePicker(true)}
      />
      <DatePicker
        open={showDatePicker}
        modal
        style={styles.datePicker}
        date={product.purchaseDate || new Date()}
        mode="date"
        format="YYYY-MM-DD"
        onConfirm={date => {
          setShowDatePicker(false);
          setProduct({...product, purchaseDate: date});
        }}
        onCancel={() => setShowDatePicker(false)}
      />
    </View>
  );
};

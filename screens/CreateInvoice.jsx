import React, {useState} from 'react';
import {View, Text, Button, Modal, StyleSheet} from 'react-native';
import ProductsModal from './ProductsModal';
import FormButton from '../components/FormButton';
import {padding} from '../utils/constants';
import FormInput from '../components/FormInput';
import DatePicker from 'react-native-date-picker';

const InvoiceScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [date, setDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <FormInput
        placeholder="Date"
        value={date ? date.toDateString() : ''}
        iconRight="calendar"
        onRightIconPress={() => setShowDatePicker(true)}
      />
      <DatePicker
        open={showDatePicker}
        modal
        date={date || new Date()}
        mode="date"
        format="YYYY-MM-DD"
        onConfirm={date => {
          setShowDatePicker(false);
          setDate(date);
        }}
        onCancel={() => setShowDatePicker(false)}
      />
      <Button title="Select Products" onPress={toggleModal} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <ProductsModal
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              toggleModal={toggleModal}
            />
          </View>
        </View>
      </Modal>
      <Text>
        Total Price ={' '}
        {selectedProducts.reduce(
          (pre, curr) => pre + +curr.salePrice * curr.quantity,
          0,
        )}
      </Text>
      <FormButton title="Create Invoice" backgroundColor="#bbb" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding,
    borderWidth: 1,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '94%',
    height: '96%',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default InvoiceScreen;

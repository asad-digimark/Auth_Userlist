import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Products from './Products';
import CheckBox from '@react-native-community/checkbox';
import ProductsModal from './ProductsModal';
import FormButton from '../components/FormButton';
import {padding} from '../utils/constants';

const InvoiceScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selection, setSelection] = useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Select Products" onPress={toggleModal} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <ProductsModal
              selection={selection}
              setSelection={setSelection}
              setModal={setModalVisible}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
});

export default InvoiceScreen;

import {Dimensions} from 'react-native';
export const height = Dimensions.get('window').height / 16;
export const padding = Dimensions.get('window').width / 24;

export const firestoreDate = date => date.toDate().toDateString();

import React, {useState} from 'react';
import {collection, doc, setDoc} from '@firebase/firestore';
import {db} from '../../db/firebase-config';

import ImagePicker from 'react-native-image-crop-picker';

import {View, Button, Image} from 'react-native';

const ImageSelector = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectImage = async () => {
    const imagePickerOptions = {
      mediaType: 'photo',
      quality: 0.5,
    };

    // const result = await launchImageLibrary(imagePickerOptions);

    // if (!result.cancelled) {
    //   setSelectedImage(result);
    // }
  };

  const storeImageInFirestore = async () => {
    console.warn('store');
    // const imageRef = doc(collection(db, "images"));
    // const uploadTask = await imageRef.put(selectedImage.uri);

    // const downloadURL = await uploadTask.ref.getDownloadURL();

    // await setDoc(imageRef, {
    //   downloadURL,
    // });
  };

  const pickImage = async () => {};

  return (
    <View>
      <Button title="Pick Image" onPress={pickImage} />
      {imageSource && (
        <Image
          source={{uri: imageSource}}
          style={{width: 200, height: 200, marginTop: 10}}
        />
      )}
    </View>
  );
};

export default ImageSelector;

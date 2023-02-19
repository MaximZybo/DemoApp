import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImagePicker, {Image, Options} from 'react-native-image-crop-picker';

const optionsDocument: Options = {
  sortOrder: 'none',
  mediaType: 'photo',
  includeBase64: true,
  compressImageQuality: 0.6,
  freeStyleCropEnabled: false,
};

export function useImageUploader() {
  const navigation = useNavigation();

  const [photo, setPhoto] = useState<Image | null>(null);

  const handleImageSelection = (selectedImage: Image) => {
    if (!selectedImage || !selectedImage.mime || !selectedImage.data) {
      navigation.navigate('PopUpModal', {title: 'Invalid selected image'});
      return;
    }

    setPhoto(selectedImage);
  };

  const handleCamera = () => {
    ImagePicker.openCamera(optionsDocument)
      .then(handleImageSelection)
      .catch(handleError);
  };

  const handleGallery = () => {
    ImagePicker.openPicker(optionsDocument)
      .then(handleImageSelection)
      .catch(handleError);
  };

  const handleError = (err: {code: string; message: string}) => {
    if (err && err.code && err.message) {
      if (err.code === 'E_PICKER_CANCELLED') {
        return;
      }
      if (
        err.code === 'E_NO_CAMERA_PERMISSION' ||
        err.code === 'E_NO_LIBRARY_PERMISSION'
      ) {
        navigation.navigate('PopUpModal', {
          title: 'Please grant this app permissions to access camera/gallery',
        });
      }
    } else {
      navigation.navigate('PopUpModal', {
        title: err.message,
      });
    }
  };

  return {
    photo,
    handleGallery,
    handleCamera,
  };
}

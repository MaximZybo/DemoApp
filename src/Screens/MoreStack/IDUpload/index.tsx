import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useImageUploader} from '@/Hooks/useImageUploader';
import {COLORS} from '@/Constants/Colors';
import {AvatarPlaceholder} from '@/Assets/Images';
import {AppScreen} from '@/Components/AppScreen';
import {Button} from '@/Components/Buttons/Button';
import {LAYOUTS} from '@/Constants/Layouts';

export const IDUpload = () => {
  const {photo, handleCamera, handleGallery} = useImageUploader();

  return (
    <AppScreen headerTitle="ID Upload">
      <View style={styles.imageWrapper}>
        {photo ? (
          <Image
            source={{uri: photo.path}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={AvatarPlaceholder}
            resizeMode="contain"
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button type="primary" title="Take a photo" onPress={handleCamera} />
        <Button type="secondary" title="Attach file" onPress={handleGallery} />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    borderWidth: 1,
    borderColor: COLORS.GREEN_400,
    borderRadius: 10,
    flex: 1,
    minHeight: 300,
    width: '100%',
    marginBottom: LAYOUTS.PADDING,
    padding: LAYOUTS.PADDING,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
});

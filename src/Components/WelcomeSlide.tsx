import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LAYOUTS} from '@/Constants/Layouts';
import {Slider1, Slider2, Slider3} from '@/Assets/Svg';
import {Typography} from '@/Components/Typography';

export type TSlide = {
  id: string;
  title: string;
  content: string;
};

type TWelcomeSlideProps = {
  item: TSlide;
};

export const WelcomeSlide = ({item}: TWelcomeSlideProps) => {
  const {width: screenWidth} = useWindowDimensions();
  const {left, right} = useSafeAreaInsets();

  const slideWidth = Math.round(screenWidth - left - right);

  return (
    <View
      style={[
        styles.container,
        {
          width: slideWidth,
        },
      ]}>
      <View style={styles.imageContainer}>
        {item.id === '0' && <Slider1 />}
        {item.id === '1' && <Slider2 />}
        {item.id === '2' && <Slider3 />}
      </View>
      <Typography size="20" weight="bold" style={styles.textHeader}>
        {item.title}
      </Typography>
      <Typography size="16" style={styles.textContent}>
        {item.content}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: LAYOUTS.PADDING,
    justifyContent: 'center',
  },
  textHeader: {
    textAlign: 'center',
    marginVertical: LAYOUTS.PADDING,
  },
  textContent: {
    textAlign: 'center',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

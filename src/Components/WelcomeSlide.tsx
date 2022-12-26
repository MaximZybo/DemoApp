import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {Slider1, Slider2, Slider3} from '@/Assets/Svg';
import {Typography} from '@/Components/Typography';
import {LAYOUTS} from '@/Constants/Layouts';

export type TSlide = {
  order: number;
  title: string;
  content: string;
};

type TWelcomeSlideProps = {
  item: TSlide;
};

export const WelcomeSlide = ({item}: TWelcomeSlideProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.imageContainer}>
        {item.order === 0 && <Slider1 />}
        {item.order === 1 && <Slider2 />}
        {item.order === 2 && <Slider3 />}
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
    marginVertical: 20,
  },
  textContent: {
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

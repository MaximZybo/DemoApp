import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '@/Constants/Colors';

type TSliderDotProps = {
  index: number;
  activeSlide: number;
};

export const SliderDot = ({index, activeSlide}: TSliderDotProps) => (
  <View
    style={[
      activeSlide === index ? styles.active : styles.inactive,
      index !== 0 && styles.leftMargin,
    ]}
  />
);

const styles = StyleSheet.create({
  active: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.GREEN_800,
  },
  inactive: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: COLORS.GREY_800,
  },
  leftMargin: {
    marginLeft: 8,
  },
});

/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import {COLORS} from '@/Constants/Colors';

const fontSizes = StyleSheet.create({
  '22': {
    fontSize: 22,
    lineHeight: 27,
  },
  '20': {
    fontSize: 20,
    lineHeight: 25,
  },
  '16': {
    fontSize: 16,
    lineHeight: 20,
  },
  '14': {
    fontSize: 14,
    lineHeight: 17,
  },
  '12': {
    fontSize: 12,
    lineHeight: 15,
  },
  '10': {
    fontSize: 10,
    lineHeight: 12,
  },
});

type TFontWeight = 'bold' | 'semibold' | 'regular';

type TFontSize = keyof typeof fontSizes;

type TTypographyProps = TextProps & {
  size: TFontSize;
  weight?: TFontWeight;
  color?: ColorValue;
  children?: string | Element | Element[];
  style?: StyleProp<TextStyle>;
};

export const Typography = ({
  size,
  weight = 'regular',
  color = COLORS.GREY_800,
  children,
  style = {},
  ...restNativeProps
}: TTypographyProps) => {
  const fontVariant = fontSizes[size];
  const fontFamily = `KumbhSans-${weight}`;

  const typographyStyles = StyleSheet.flatten([
    fontVariant,
    {fontFamily},
    !!color && {color},
    style,
  ]);

  return (
    <Text style={typographyStyles} {...restNativeProps}>
      {children}
    </Text>
  );
};

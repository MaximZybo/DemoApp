import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Typography} from '@/Components/Typography';

type TLabelProps = {
  children: string;
  style?: StyleProp<TextStyle>;
};

export const Label = ({children, style}: TLabelProps) => {
  return (
    <Typography size="14" weight="semibold" style={[styles.label, style]}>
      {children}
    </Typography>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
  },
});

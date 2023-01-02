import React from 'react';
import {StyleSheet} from 'react-native';
import {Typography} from '@/Components/Typography';

type TLabelProps = {
  children: string;
};

export const Label = ({children}: TLabelProps) => {
  return (
    <Typography size="14" weight="semibold" style={styles.label}>
      {children}
    </Typography>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 12,
  },
});

import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '@/Constants/Colors';
import {BaseModal} from '@/Components/BaseModal';

export const LoaderModal = () => {
  return (
    <BaseModal overlayStyle={styles.overlay} containerStyle={styles.container}>
      <ActivityIndicator color={COLORS.GREEN_900} size="large" />
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
  },
});

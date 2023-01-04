import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ListSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

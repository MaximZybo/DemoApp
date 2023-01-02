import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {TransactionItem} from '@/Components/TransactionItem';
import {transactions} from './data';

export const Transactions = () => {
  return (
    <AppScreen
      headerTitle="Transactions"
      isScroll={false}
      contentContainerStyle={styles.contentContainer}>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionItem item={item} />}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 0,
  },
});

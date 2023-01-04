import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {TransactionItem} from '@/Components/TransactionItem';
import {ListSeparator} from '@/Components/ListSeparator';
import {LAYOUTS} from '@/Constants/Layouts';
import {transactions} from './data';

export const Transactions = () => {
  return (
    <AppScreen
      headerTitle="Transactions"
      isScroll={false}
      contentContainerStyle={styles.screenContainer}>
      <FlatList
        data={transactions}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({item}) => <TransactionItem item={item} />}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  listContainer: {
    paddingVertical: LAYOUTS.PADDING,
  },
});

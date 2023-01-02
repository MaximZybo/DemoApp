import React from 'react';
import {AppScreen} from '@/Components/AppScreen';
import {MenuItem} from '@/Components/MenuItem';
import {BillsStackScreenProps} from '@/Navigation/types';

export const BillsManagement = ({
  navigation,
}: BillsStackScreenProps<'BillsManagement'>) => {
  return (
    <AppScreen>
      <MenuItem
        title="Transactions"
        onPress={() => navigation.navigate('Transactions')}
      />
    </AppScreen>
  );
};

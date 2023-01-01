import React from 'react';
import {AppScreen} from '@/Components/AppScreen';
import {MenuItem} from '@/Components/MenuItem';
import {MoreStackScreenProps} from '@/Navigation/types';

export const Settings = ({navigation}: MoreStackScreenProps<'Settings'>) => {
  return (
    <AppScreen>
      <MenuItem
        title="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
      <MenuItem
        title="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
    </AppScreen>
  );
};

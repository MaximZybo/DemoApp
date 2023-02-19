import React from 'react';
import {COLORS} from '@/Constants/Colors';
import {useAppDispatch} from '@/Hooks/redux';
import {setIsSignedOut} from '@/Store/Profile/profileSlice';
import {AppScreen} from '@/Components/AppScreen';
import {MenuItem} from '@/Components/MenuItem';
import {MoreStackScreenProps} from '@/Navigation/types';

export const Settings = ({navigation}: MoreStackScreenProps<'Settings'>) => {
  const dispatch = useAppDispatch();

  return (
    <AppScreen>
      <MenuItem
        title="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
      <MenuItem
        title="Biometrics"
        onPress={() => navigation.navigate('Biometrics')}
      />
      <MenuItem
        title="ID Upload"
        onPress={() => navigation.navigate('IDUpload')}
      />
      <MenuItem
        fontColor={COLORS.RED_300}
        title="Logout"
        onPress={() => dispatch(setIsSignedOut())}
      />
    </AppScreen>
  );
};

import React from 'react';
import {Button, Text} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';

export const Settings = ({navigation}) => {
  return (
    <AppScreen>
      <Text>Settings</Text>
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
    </AppScreen>
  );
};

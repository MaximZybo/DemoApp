import React from 'react';
import {Text, Button} from 'react-native';
import {useAppDispatch} from '@/Hooks/redux';
import {setIsSignedOut} from '@/Store/Profile/profileSlice';
import {AppScreen} from '@/Components/AppScreen';

export const Dashboard = () => {
  const dispatch = useAppDispatch();

  return (
    <AppScreen>
      <Text>Dashboard</Text>
      <Button title="Sign Out" onPress={() => dispatch(setIsSignedOut())} />
    </AppScreen>
  );
};

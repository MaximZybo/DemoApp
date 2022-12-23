import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@/Screens/Dashboard';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

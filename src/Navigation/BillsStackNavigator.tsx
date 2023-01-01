import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BillsManagement} from '@/Screens/BillsManagement';
import {BillsStackParamList} from './types';

const Stack = createNativeStackNavigator<BillsStackParamList>();

export const BillsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BillsManagement" component={BillsManagement} />
    </Stack.Navigator>
  );
};

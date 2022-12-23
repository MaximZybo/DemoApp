import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContactUs} from '@/Screens/ContactUs';
import {Settings} from '@/Screens/Settings';
import {MoreStackParamList} from './types';

const Stack = createNativeStackNavigator<MoreStackParamList>();

export const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};

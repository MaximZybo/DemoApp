import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ContactUs} from '@/Screens/MoreStack/ContactUs';
import {Settings} from '@/Screens/MoreStack/Settings';
import {Biometrics} from '@/Screens/MoreStack/Biometrics';
import {MoreStackParamList} from './types';

const Stack = createNativeStackNavigator<MoreStackParamList>();

export const MoreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Biometrics" component={Biometrics} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboarding} from '@/Screens/Onboarding';
import {Register} from '@/Screens/Register';
import {Login} from '@/Screens/Login';
import {BeforeAuthStackParamList} from './types';

const Stack = createNativeStackNavigator<BeforeAuthStackParamList>();

export const BeforeAuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

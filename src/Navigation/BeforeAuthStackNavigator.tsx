import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Onboarding} from '@/Screens/Onboarding';
import {Register} from '@/Screens/Register';
import {Login} from '@/Screens/Login';
import {Header} from '@/Components/Header';
import {BeforeAuthStackParamList} from './types';

const Stack = createNativeStackNavigator<BeforeAuthStackParamList>();

export const BeforeAuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: Header}}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

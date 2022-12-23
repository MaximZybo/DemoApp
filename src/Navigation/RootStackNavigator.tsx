import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {PopUpModal} from '@/Screens/Modals/PopUpModal';
import {LoaderModal} from '@/Screens/Modals/LoaderModal';
import {BeforeAuthStackNavigator} from './BeforeAuthStackNavigator';
import {AfterAuthStackNavigator} from './AfterAuthStackNavigator';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BeforeAuth" component={BeforeAuthStackNavigator} />
        <Stack.Screen name="AfterAuth" component={AfterAuthStackNavigator} />
        <Stack.Group
          screenOptions={{
            animation: 'fade',
            presentation: 'transparentModal',
            gestureEnabled: false,
          }}>
          <Stack.Screen name="PopUpModal" component={PopUpModal} />
          <Stack.Screen name="LoadingModal" component={LoaderModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {MoreStackNavigator} from './MoreStackNavigator';
import {AfterAuthParamList} from './types';

const Tab = createBottomTabNavigator<AfterAuthParamList>();

export const AfterAuthStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="MoreStack" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

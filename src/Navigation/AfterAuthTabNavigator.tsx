import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '@/Constants/Colors';
import {Bank, CreditCard, MeatballMenu} from '@/Assets/Svg';
import {HomeStackNavigator} from './HomeStackNavigator';
import {BillsStackNavigator} from './BillsStackNavigator';
import {MoreStackNavigator} from './MoreStackNavigator';
import {AfterAuthParamList} from './types';

const Tab = createBottomTabNavigator<AfterAuthParamList>();

export const AfterAuthTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.GREEN_800,
        tabBarInactiveTintColor: COLORS.GREY_800,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{tabBarIcon: Bank}}
      />
      <Tab.Screen
        name="BillsStack"
        component={BillsStackNavigator}
        options={{tabBarIcon: CreditCard}}
      />
      <Tab.Screen
        name="MoreStack"
        component={MoreStackNavigator}
        options={{tabBarIcon: MeatballMenu}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: COLORS.GREY_800,
  },
});

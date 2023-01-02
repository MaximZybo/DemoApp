import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '@/Constants/Colors';
import {useAppSelector} from '@/Hooks/redux';
import {getIsSignedIn} from '@/Store/Profile/selectors';
import {PopUpModal} from '@/Screens/Modals/PopUpModal';
import {LoaderModal} from '@/Screens/Modals/LoaderModal';
import {BeforeAuthStackNavigator} from './BeforeAuthStackNavigator';
import {AfterAuthTabNavigator} from './AfterAuthTabNavigator';
import {navigationRef} from './Root';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const isSignedIn = useAppSelector(getIsSignedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        backgroundColor={COLORS.TRANSPARENT}
        barStyle="dark-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Stack.Screen name="AfterAuth" component={AfterAuthTabNavigator} />
        ) : (
          <Stack.Screen
            name="BeforeAuth"
            component={BeforeAuthStackNavigator}
          />
        )}
        <Stack.Group
          screenOptions={{
            animation: 'fade',
            presentation: 'containedTransparentModal',
            gestureEnabled: false,
          }}>
          <Stack.Screen name="PopUpModal" component={PopUpModal} />
          <Stack.Screen name="LoadingModal" component={LoaderModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

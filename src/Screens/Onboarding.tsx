import React from 'react';
import {Text, Button, StatusBar} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {COLORS} from '@/Constants/Colors';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';

export const Onboarding = ({
  navigation,
}: BeforeAuthStackScreenProps<'Onboarding'>) => {
  const registerPress = () => {
    navigation.navigate('Register');
  };

  return (
    <AppScreen>
      <StatusBar
        translucent
        backgroundColor={COLORS.TRANSPARENT}
        barStyle="dark-content"
      />
      <Text>Onboarding</Text>
      <Button title="Register" onPress={registerPress} />
    </AppScreen>
  );
};

import React from 'react';
import {Button, StatusBar} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {Typography} from '@/Components/Typography';
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
      <Typography size="16" weight="semibold">
        semibold
      </Typography>
      <Typography size="16" weight="regular">
        regular
      </Typography>
      <Typography size="22" weight="bold">
        bold
      </Typography>
      <Button title="Register" onPress={registerPress} />
    </AppScreen>
  );
};

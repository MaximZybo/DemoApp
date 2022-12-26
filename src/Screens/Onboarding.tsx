import React from 'react';
import {StatusBar} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {Typography} from '@/Components/Typography';
import {Button} from '@/Components/Buttons/Button';
import {BaseInput} from '@/Components/Inputs/BaseInput';
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

      <Typography size="16" weight="regular">
        regular
      </Typography>
      <BaseInput
        label="label"
        onChangeText={() => {}}
        placeholder="placeholder"
      />
      <BaseInput
        label="label"
        onChangeText={() => {}}
        editable={false}
        placeholder="placeholder"
      />
      <Button title="Register" onPress={registerPress} type="primary" />
    </AppScreen>
  );
};

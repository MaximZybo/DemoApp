import React from 'react';
import {View, Text, Button} from 'react-native';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';

export const Onboarding = ({
  navigation,
}: BeforeAuthStackScreenProps<'Onboarding'>) => {
  const registerPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Text>Onboarding</Text>
      <Button title="Register" onPress={registerPress} />
    </View>
  );
};

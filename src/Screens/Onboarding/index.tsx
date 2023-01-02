import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {AppScreen} from '@/Components/AppScreen';
import {Carousel} from '@/Components/Carousel';
import {
  TSlideOnboarding,
  SlideOnboarding,
} from '@/Components/Carousel/SlideOnboarding';
import {Button} from '@/Components/Buttons/Button';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';
import {slides} from './data';

export const Onboarding = ({
  navigation,
}: BeforeAuthStackScreenProps<'Onboarding'>) => {
  const loginPress = () => {
    navigation.navigate('Login');
  };

  const registerPress = () => {
    navigation.navigate('Register');
  };

  const renderSlide = (item: TSlideOnboarding) => (
    <SlideOnboarding item={item} />
  );

  return (
    <AppScreen contentContainerStyle={styles.container}>
      <Carousel
        isAutoScroll
        slides={slides}
        renderKey="id"
        renderSlide={renderSlide}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={loginPress} />
        <Button title="Register" type="secondary" onPress={registerPress} />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  buttonsContainer: {
    marginTop: LAYOUTS.PADDING,
    paddingHorizontal: LAYOUTS.PADDING,
  },
});

import React, {useState} from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import {AppScreen} from '@/Components/AppScreen';
import {WelcomeSlide} from '@/Components/WelcomeSlide';
import {SliderDot} from '@/Components/SliderDot';
import {COLORS} from '@/Constants/Colors';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';
import {slides} from './data';
import {Button} from '@/Components/Buttons/Button';
import {LAYOUTS} from '@/Constants/Layouts';

export const Onboarding = ({
  navigation,
}: BeforeAuthStackScreenProps<'Onboarding'>) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const signInPress = () => {
    navigation.navigate('Login');
  };

  const registerPress = () => {
    navigation.navigate('Register');
  };

  const scrollHandler = ({
    nativeEvent: {
      contentOffset: {x},
      contentSize: {width},
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const interval = width / slides.length;
    const currentSlide = Math.round(x / interval);
    if (currentSlide !== activeSlide) {
      setActiveSlide(currentSlide);
    }
  };

  return (
    <AppScreen contentContainerStyle={styles.container}>
      <StatusBar
        translucent
        backgroundColor={COLORS.TRANSPARENT}
        barStyle="dark-content"
      />
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}>
          {slides.map(slide => (
            <WelcomeSlide key={slide.order} item={slide} />
          ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {slides.map((slide, index) => (
            <SliderDot
              key={slide.order}
              activeSlide={activeSlide}
              index={index}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Sign In" onPress={signInPress} />
        <Button title="Register" type="secondary" onPress={registerPress} />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 30,
  },
  buttonsContainer: {
    marginTop: 30,
    paddingHorizontal: LAYOUTS.PADDING,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    alignItems: 'center',
  },
});

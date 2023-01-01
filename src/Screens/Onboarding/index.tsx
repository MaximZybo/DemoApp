import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {AppScreen} from '@/Components/AppScreen';
import {WelcomeSlide, TSlide} from '@/Components/WelcomeSlide';
import {SliderDot} from '@/Components/SliderDot';
import {Button} from '@/Components/Buttons/Button';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';
import {slides} from './data';

export const Onboarding = ({
  navigation,
}: BeforeAuthStackScreenProps<'Onboarding'>) => {
  const {width: screenWidth} = useWindowDimensions();

  const listRef = useRef<FlatList>(null);
  const timeoutRef = useRef<ReturnType<typeof setInterval>>();
  const isTouchedRef = useRef(false);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    clearInterval(timeoutRef.current);

    if (!isTouchedRef.current && activeSlide < slides.length - 1) {
      // Index - 1 to start array from 0
      timeoutRef.current = setTimeout(() => {
        listRef.current?.scrollToIndex({
          index: activeSlide + 1,
          animated: true,
        });
      }, 3000);
    }
  }, [activeSlide]);

  useEffect(() => {
    // Restores scroll position if phone rotates or fold is opened
    listRef.current?.scrollToOffset({offset: 0, animated: false});
  }, [screenWidth]);

  const scrollHandler = ({
    nativeEvent: {
      contentOffset: {x},
      contentSize: {width},
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollInterval = width / slides.length;
    const currentSlide = Math.round(x / scrollInterval);
    if (currentSlide !== activeSlide) {
      setActiveSlide(currentSlide);
    }
  };

  const scrollBeginDragHandler = () => {
    clearInterval(timeoutRef.current);
    isTouchedRef.current = true;
  };

  const renderItem = ({item}: ListRenderItemInfo<TSlide>) => (
    <WelcomeSlide item={item} />
  );

  const loginPress = () => {
    navigation.navigate('Login');
  };

  const registerPress = () => {
    navigation.navigate('Register');
  };

  return (
    <AppScreen contentContainerStyle={styles.container}>
      <View>
        <FlatList
          ref={listRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          data={slides}
          onScroll={scrollHandler}
          onScrollBeginDrag={scrollBeginDragHandler}
          keyExtractor={item => item.title}
          renderItem={renderItem}
        />
        <View style={styles.paginationContainer}>
          {slides.map((slide, index) => (
            <SliderDot key={slide.id} activeSlide={activeSlide} index={index} />
          ))}
        </View>
      </View>
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    alignItems: 'center',
  },
});

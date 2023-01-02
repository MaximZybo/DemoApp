import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {useAppDispatch} from '@/Hooks/redux';
import {setIsSignedOut} from '@/Store/Profile/profileSlice';
import {AppScreen} from '@/Components/AppScreen';
import {Carousel} from '@/Components/Carousel';
import {SlideAccount, TSlideAccount} from '@/Components/Carousel/SlideAccount';
import {cards} from './data';

export const Dashboard = () => {
  const dispatch = useAppDispatch();

  const renderSlide = (item: TSlideAccount) => <SlideAccount item={item} />;

  return (
    <AppScreen contentContainerStyle={styles.container}>
      <Carousel
        isAutoScroll={false}
        slides={cards}
        renderKey="number"
        renderSlide={renderSlide}
      />
      <Button title="Sign Out" onPress={() => dispatch(setIsSignedOut())} />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});

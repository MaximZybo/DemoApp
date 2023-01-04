import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {AppScreen} from '@/Components/AppScreen';
import {Carousel} from '@/Components/Carousel';
import {SlideAccount} from '@/Components/Carousel/SlideAccount';
import {Label} from '@/Components/Label';
import {TAccount} from '@/Store/Profile/types';
import {accounts} from '@/Mock';

export const Dashboard = () => {
  const renderSlide = (item: TAccount, index: number) => (
    <SlideAccount item={item} index={index} />
  );

  return (
    <AppScreen contentContainerStyle={styles.container}>
      <Carousel
        isAutoScroll={false}
        slides={accounts}
        renderKey="number"
        renderSlide={renderSlide}
      />
      <View style={styles.paddingContainer}>
        <Label>Products</Label>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  paddingContainer: {
    paddingHorizontal: LAYOUTS.PADDING,
  },
});

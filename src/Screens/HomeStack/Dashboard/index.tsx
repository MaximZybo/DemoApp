import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {AppScreen} from '@/Components/AppScreen';
import {Carousel} from '@/Components/Carousel';
import {SlideAccount} from '@/Components/Carousel/SlideAccount';
import {Label} from '@/Components/Label';
import {ProductCard} from '@/Components/ProductCard';
import {TAccount} from '@/Store/Profile/types';
import {accounts, productCards} from '@/Mock';

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickTransactions}
          contentContainerStyle={styles.quickTransactionsContainer}>
          {productCards.map((card, index) => {
            return (
              <ProductCard
                key={card.icon}
                text={card.text}
                icon={card.icon}
                isLast={productCards.length - 1 === index}
                isFirst={index === 0}
                onPress={() => {}}
              />
            );
          })}
        </ScrollView>
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
  quickTransactionsContainer: {
    minWidth: '100%',
  },
  quickTransactions: {
    marginBottom: 15,
  },
});

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
import {CarouselItem} from './CarouselItem';
import {SliderDot} from './SliderDot';

type TCarouselProps<Option> = {
  slides: Option[];
  renderKey: keyof Option;
  isAutoScroll: boolean;
  renderSlide: (
    item: Option,
    index: number,
  ) => React.ReactNode[] | React.ReactNode;
};

export function Carousel<Option>({
  slides,
  renderKey,
  isAutoScroll,
  renderSlide,
}: TCarouselProps<Option>) {
  const {width: screenWidth} = useWindowDimensions();

  const listRef = useRef<FlatList>(null);
  const timeoutRef = useRef<ReturnType<typeof setInterval>>();
  const isTouchedRef = useRef(false);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (isAutoScroll) {
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
    }
  }, [activeSlide, isAutoScroll, slides.length]);

  const scrollBeginDragHandler = () => {
    if (isAutoScroll) {
      clearInterval(timeoutRef.current);
      isTouchedRef.current = true;
    }
  };

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

  const renderItem = ({item, index}: ListRenderItemInfo<Option>) => (
    <CarouselItem>{renderSlide(item, index)}</CarouselItem>
  );

  return (
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
        keyExtractor={item => item[renderKey] as string}
        renderItem={renderItem}
      />
      <View style={styles.paginationContainer}>
        {slides.map((slide, index) => (
          <SliderDot
            key={slide[renderKey] as string}
            activeSlide={activeSlide}
            index={index}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
    alignItems: 'center',
  },
});

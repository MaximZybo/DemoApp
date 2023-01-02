import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type CarouselItemProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export const CarouselItem = ({children}: CarouselItemProps) => {
  const {width: screenWidth} = useWindowDimensions();
  const {left, right} = useSafeAreaInsets();

  const slideWidth = Math.round(screenWidth - left - right);

  return (
    <View
      style={{
        width: slideWidth,
      }}>
      {children}
    </View>
  );
};

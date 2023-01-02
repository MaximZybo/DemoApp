import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {LAYOUTS} from '@/Constants/Layouts';
import {Typography} from '@/Components/Typography';

export type TSlideOnboarding = {
  id: string;
  title: string;
  content: string;
  icon: React.FC<SvgProps>;
};

type TSlideOnboardingProps = {
  item: TSlideOnboarding;
};

export const SlideOnboarding = ({item}: TSlideOnboardingProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {React.createElement(item.icon)}
      </View>
      <Typography size="20" weight="bold" style={styles.textHeader}>
        {item.title}
      </Typography>
      <Typography size="16" style={styles.textContent}>
        {item.content}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: LAYOUTS.PADDING,
    justifyContent: 'center',
  },
  textHeader: {
    textAlign: 'center',
    marginVertical: LAYOUTS.PADDING,
  },
  textContent: {
    textAlign: 'center',
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

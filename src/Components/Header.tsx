import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LAYOUTS} from '@/Constants/Layouts';
import {COLORS} from '@/Constants/Colors';
import {AngleLeft} from '@/Assets/Svg';
import {PressableOpacity} from './Buttons/PressableOpacity';
import {Typography} from './Typography';

type THeaderProps = {
  title: string;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
};

export const Header = ({
  title,
  paddingTop,
  paddingLeft,
  paddingRight,
}: THeaderProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop,
          paddingLeft,
          paddingRight,
        },
      ]}>
      <View style={styles.wrapper}>
        <PressableOpacity
          hitSlop={5}
          onPress={navigation.goBack}
          style={styles.backButton}>
          <AngleLeft color={COLORS.ICON_DEFAULT} />
        </PressableOpacity>
        <Typography size="16" weight="semibold" style={styles.title}>
          {title}
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_200,
  },
  wrapper: {
    marginHorizontal: LAYOUTS.PADDING,
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 12,
  },
  backButton: {
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    minHeight: LAYOUTS.SVG_ICONS_SIZE,
    marginHorizontal: LAYOUTS.SVG_ICONS_SIZE,
    paddingHorizontal: 6,
  },
});

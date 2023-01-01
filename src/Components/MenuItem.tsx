import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {AngleRight} from '@/Assets/Svg';
import {PressableOpacity} from './Buttons/PressableOpacity';
import {Typography} from './Typography';

type TMenuItemProps = {
  title: string;
  onPress: () => void;
};

export const MenuItem = ({title, onPress}: TMenuItemProps) => {
  return (
    <PressableOpacity hitSlop={5} onPress={onPress} style={styles.container}>
      <Typography size="16" weight="semibold" style={styles.title}>
        {title}
      </Typography>
      <AngleRight color={COLORS.GREEN_800} />
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 6,
    backgroundColor: COLORS.WHITE,
    marginBottom: LAYOUTS.PADDING,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.GREY_300,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
        shadowColor: COLORS.GREY_900,
      },
    }),
  },
  title: {
    flex: 1,
  },
});

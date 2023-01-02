import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {Typography} from '@/Components/Typography';
import {COLORS} from '@/Constants/Colors';

export type TSlideAccount = {
  number: string;
  type: string;
  balance: number;
  isActive: boolean;
};

type TSlideAccountProps = {
  item: TSlideAccount;
};

export const SlideAccount = ({item}: TSlideAccountProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Typography size="14" style={styles.textContent}>
          {'Account number: '}
          <Typography size="14" weight="semibold">
            {item.number}
          </Typography>
        </Typography>
        <Typography size="14" style={styles.textContent}>
          {'Account type: '}
          <Typography size="14" weight="semibold">
            {item.type}
          </Typography>
        </Typography>
        <Typography size="14">
          {'Balance: '}
          <Typography size="14" weight="semibold">
            {item.balance}
          </Typography>
        </Typography>
      </View>
      <View style={[styles.icon, !item.isActive && styles.iconInactive]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: LAYOUTS.PADDING,
    backgroundColor: COLORS.GREY_200,
    borderRadius: 6,
    padding: LAYOUTS.PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    marginBottom: 4,
  },
  icon: {
    height: LAYOUTS.SVG_ICONS_SIZE,
    width: LAYOUTS.SVG_ICONS_SIZE,
    borderRadius: Math.ceil(LAYOUTS.SVG_ICONS_SIZE),
    backgroundColor: COLORS.GREEN_400,
  },
  iconInactive: {
    backgroundColor: COLORS.RED_200,
  },
});

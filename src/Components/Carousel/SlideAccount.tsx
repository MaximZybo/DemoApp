import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LAYOUTS} from '@/Constants/Layouts';
import {COLORS} from '@/Constants/Colors';
import {Typography} from '@/Components/Typography';
import {formatAmount} from '@/Utils/formatters';
import {TAccount} from '@/Store/Profile/types';

type TSlideAccountProps = {
  item: TAccount;
  index: number;
};

export const SlideAccount = ({item, index}: TSlideAccountProps) => {
  const isEven = index % 2 === 0;

  return (
    <View style={[styles.container, isEven && styles.evenContainer]}>
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
            {formatAmount(item.balance)}
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
    backgroundColor: COLORS.GREY_300,
    borderRadius: 6,
    padding: LAYOUTS.PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  evenContainer: {
    backgroundColor: COLORS.GREY_200,
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

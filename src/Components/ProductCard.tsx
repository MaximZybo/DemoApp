import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '@/Constants/Colors';
import {Attention, Eye, Bank, CreditCard} from '@/Assets/Svg';
import {Typography} from '@/Components/Typography';
import {PressableOpacity} from '@/Components/Buttons/PressableOpacity';

const icons = {
  Attention,
  Eye,
  Bank,
  CreditCard,
};

export type Icon = keyof typeof icons;

type TProductCardProps = {
  text: string;
  icon: Icon;
  isLast: boolean;
  isFirst: boolean;
  onPress: () => void;
};

export const ProductCard = ({
  text,
  icon,
  isLast,
  isFirst,
  onPress,
}: TProductCardProps) => {
  const renderIcon = () =>
    React.createElement(icons[icon], {
      style: styles.icon,
      color: COLORS.ICON_DEFAULT,
    });

  return (
    <PressableOpacity
      onPress={onPress}
      style={[
        styles.container,
        !isLast && styles.rightMargin,
        !isFirst && styles.leftMargin,
      ]}>
      <Typography weight="bold" color={COLORS.GREY_900} size="16">
        {text}
      </Typography>
      {renderIcon()}
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    maxWidth: 120,
    maxHeight: 120,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: COLORS.GREEN_600,
  },
  rightMargin: {
    marginRight: 5,
  },
  leftMargin: {
    marginLeft: 'auto',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Typography} from '@/Components/Typography';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {PressableOpacity} from './PressableOpacity';

type TButtonProps = {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const Button = ({
  title,
  type = 'primary',
  disabled = false,
  style,
  onPress,
}: TButtonProps) => {
  let buttonStyle;
  let typographyColor;

  switch (type) {
    case 'primary':
      typographyColor = COLORS.WHITE;

      buttonStyle = disabled
        ? styles.primaryButtonDisabled
        : styles.primaryButton;

      break;

    case 'secondary':
      typographyColor = COLORS.BLACK;

      buttonStyle = disabled
        ? styles.secondaryButtonDisabled
        : styles.secondaryButton;

      break;

    case 'tertiary':
      buttonStyle = styles.tertiaryButton;
      typographyColor = disabled ? COLORS.GREY_400 : COLORS.BLACK;

      break;
  }

  const mergedButtonStyle = StyleSheet.flatten([
    styles.basicButton,
    buttonStyle,
    style,
  ]);

  return (
    <PressableOpacity
      disabled={disabled}
      style={mergedButtonStyle}
      onPress={onPress}>
      <Typography
        size="16"
        weight="bold"
        color={typographyColor}
        numberOfLines={1}>
        {title}
      </Typography>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  basicButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: LAYOUTS.PADDING,
  },
  primaryButton: {
    backgroundColor: COLORS.BLACK,
    borderColor: COLORS.BLACK,
  },
  primaryButtonDisabled: {
    backgroundColor: COLORS.GREY_400,
    borderColor: COLORS.GREY_400,
  },
  secondaryButton: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GREY_400,
  },
  secondaryButtonDisabled: {
    backgroundColor: COLORS.GREY_400,
    borderColor: COLORS.GREY_400,
  },
  tertiaryButton: {
    borderColor: COLORS.TRANSPARENT,
    alignSelf: 'center',
  },
});

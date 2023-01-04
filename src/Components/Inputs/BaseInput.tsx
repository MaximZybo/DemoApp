import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleProp,
  TextStyle,
  TextInputProps,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ColorValue,
} from 'react-native';
import {FieldError} from 'react-hook-form';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {Check, Attention, Eye, EyeCrossed, ChevronDown} from '@/Assets/Svg';
import {Typography} from '@/Components/Typography';
import {ConditionalWrapper} from '@/Components/ConditionalWrapper';
import {PressableOpacity} from '@/Components/Buttons/PressableOpacity';

const icons = {
  eye: Eye,
  eyeCrossed: EyeCrossed,
  check: Check,
  attention: Attention,
  chevronDown: ChevronDown,
};

const HORIZONTAL_PADDING = 12;
const ICON_MARGIN = 10;

export type TIcon = keyof typeof icons;

export type TBaseInputProps = Omit<TextInputProps, 'onChangeText'> & {
  onChangeText: (text: string) => void; // Replace optional to required
  icon?: TIcon;
  iconColor?: ColorValue;
  onPress?: () => void;
  onIconPress?: () => void;
  label?: string;
  error?: FieldError;
  style?: StyleProp<TextStyle>;
};

export const BaseInput = ({
  icon,
  iconColor = COLORS.ICON_DEFAULT,
  onIconPress,
  onPress,
  label,
  error,
  style,
  editable = true,
  onFocus,
  onBlur,
  ...restProps
}: TBaseInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  let rightPadding = HORIZONTAL_PADDING;

  if (icon) {
    rightPadding = HORIZONTAL_PADDING + LAYOUTS.SVG_ICONS_SIZE + ICON_MARGIN;
  }

  const baseInputStyles = StyleSheet.flatten([
    styles.baseContainer,
    !!error && styles.error,
    isFocused && {borderColor: COLORS.GREEN_500},
    !editable && styles.disabledInput,
  ]);

  const inputFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const inputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const renderLabel = () => (
    <Typography size="12" color={COLORS.GREY_600}>
      {label}
    </Typography>
  );

  const renderIcon = () =>
    icon ? React.createElement(icons[icon], {color: iconColor}) : null;

  const renderBottomError = () => (
    <Typography size="12" color={COLORS.RED_300}>
      {error?.message || ' '}
    </Typography>
  );

  const renderBaseInput = () => (
    <View style={baseInputStyles}>
      <TextInput
        style={[styles.baseTextInput, {paddingRight: rightPadding}, style]}
        placeholderTextColor={COLORS.GREY_300}
        editable={editable}
        onFocus={inputFocus}
        onBlur={inputBlur}
        {...restProps}
      />
      <View style={styles.iconWrapper}>
        <ConditionalWrapper
          condition={!!onIconPress}
          wrapper={(wrapperChildren: React.ReactNode) => (
            <PressableOpacity onPress={onIconPress} hitSlop={10}>
              <>{wrapperChildren}</>
            </PressableOpacity>
          )}>
          {renderIcon()}
        </ConditionalWrapper>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {!!label && renderLabel()}
      <View style={styles.innerContainer}>
        <ConditionalWrapper
          condition={!!onPress}
          wrapper={(wrapperChildren: React.ReactNode) => (
            <PressableOpacity onPress={onPress}>
              <View pointerEvents="none">{wrapperChildren}</View>
            </PressableOpacity>
          )}>
          {renderBaseInput()}
        </ConditionalWrapper>
      </View>
      {renderBottomError()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
  },
  innerContainer: {
    marginVertical: 6,
  },
  baseContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.GREY_700,
    backgroundColor: COLORS.WHITE,
  },
  baseTextInput: {
    fontFamily: 'KumbhSans-regular',
    fontSize: 14,
    paddingLeft: HORIZONTAL_PADDING,
    height: 45,
    color: COLORS.GREY_800,
  },
  error: {
    borderColor: COLORS.RED_300,
  },
  iconWrapper: {
    position: 'absolute',
    right: HORIZONTAL_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  disabledInput: {
    backgroundColor: COLORS.GREY_100,
  },
});

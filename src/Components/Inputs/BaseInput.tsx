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
} from 'react-native';
import {COLORS} from '@/Constants/Colors';
import {Typography} from '@/Components/Typography';

type TBaseInputProps = Omit<TextInputProps, 'onChangeText'> & {
  onChangeText: (text: string) => void; // Replace optional to required
  label?: string;
  error?: string;
  style?: StyleProp<TextStyle>;
};

export const BaseInput = ({
  label,
  error,
  style,
  editable = true,
  onFocus,
  onBlur,
  ...restProps
}: TBaseInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseInputStyles = StyleSheet.flatten([
    stylesInput.baseContainer,
    isFocused && {borderColor: COLORS.GREEN_500},
    !!error && stylesInput.error,
    !editable && stylesInput.disabledInput,
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

  const renderBottomError = () => (
    <Typography size="12" color={COLORS.RED_300}>
      {error || ' '}
    </Typography>
  );

  const renderBaseInput = () => (
    <TextInput
      style={[stylesInput.baseTextInput, style]}
      placeholderTextColor={COLORS.GREY_300}
      editable={editable}
      onFocus={inputFocus}
      onBlur={inputBlur}
      {...restProps}
    />
  );

  return (
    <View style={stylesInput.container}>
      {!!label && renderLabel()}
      <View style={baseInputStyles}>{renderBaseInput()}</View>
      {renderBottomError()}
    </View>
  );
};

const stylesInput = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  baseContainer: {
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GREY_700,
    backgroundColor: COLORS.WHITE,
  },
  baseTextInput: {
    fontFamily: 'KumbhSans-regular',
    fontSize: 16,
    paddingHorizontal: 12,
    height: 45,
    color: COLORS.GREY_800,
  },
  error: {
    borderColor: COLORS.RED_300,
  },
  disabledInput: {
    backgroundColor: COLORS.GREY_100,
  },
});

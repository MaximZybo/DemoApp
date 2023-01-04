import React from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {
  digitSplit,
  getClearedAmount,
  amountFormatOnBlur,
} from '@/Utils/formatters';
import {BaseInput, TBaseInputProps} from './BaseInput';

type TAmountInputProps = {} & Omit<TBaseInputProps, 'keyboardType' | 'label'>;

export const AmountInput = ({
  value,
  onChangeText,
  onBlur,
  ...restProps
}: TAmountInputProps) => {
  const onTextChange = (text: string) => onChangeText(getClearedAmount(text));

  const blurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onChangeText?.(amountFormatOnBlur(value));
    onBlur?.(e);
  };

  return (
    <BaseInput
      value={digitSplit(value)}
      onChangeText={onTextChange}
      onBlur={blurHandler}
      keyboardType="decimal-pad"
      label="Amount"
      {...restProps}
    />
  );
};

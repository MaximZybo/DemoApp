import React from 'react';
import {ACCOUNT_NUMBER_LENGTH} from '@/Constants/Validation';
import {getOnlyDigits} from '@/Utils/formatters';
import {BaseInput, TBaseInputProps} from './BaseInput';

type TNumericInputProps = {
  type?: 'account';
} & Omit<TBaseInputProps, 'keyboardType' | 'maxLength'>;

export const NumericInput = ({
  type,
  onChangeText,
  ...restProps
}: TNumericInputProps) => {
  const onTextChange = (text: string) => onChangeText(getOnlyDigits(text));

  let maxLength;

  switch (type) {
    case 'account':
      maxLength = ACCOUNT_NUMBER_LENGTH;
      break;
  }

  return (
    <BaseInput
      onChangeText={onTextChange}
      keyboardType="number-pad"
      maxLength={maxLength}
      {...restProps}
    />
  );
};

import React from 'react';
import {Merge, FieldError, FieldErrorsImpl} from 'react-hook-form';
import {Typography} from '@/Components/Typography';
import {TBank} from '@/Store/Payments/types';
import {SelectPicker, TSelectPickerChildProps} from '.';

type TBankSelectorProps = {
  error?: Merge<FieldError, FieldErrorsImpl<TBank>>;
};

export const BankSelector = ({
  value,
  error,
  ...rest
}: TBankSelectorProps & TSelectPickerChildProps<TBank>) => {
  const renderItem = (item: TBank) => {
    return (
      <Typography size="14">
        {'Bank name: '}
        <Typography size="14" weight="semibold">
          {item.name}
        </Typography>
      </Typography>
    );
  };

  return (
    <SelectPicker
      label="Bank"
      value={value?.name}
      error={error?.name}
      renderItem={renderItem}
      {...rest}
    />
  );
};

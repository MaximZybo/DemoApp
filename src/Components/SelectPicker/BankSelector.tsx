import React from 'react';
import {Typography} from '@/Components/Typography';
import {TBank} from '@/Store/Payments/types';
import {SelectPicker, TSelectPickerChildProps} from '.';

export const BankSelector = ({
  value,
  ...rest
}: TSelectPickerChildProps<TBank>) => {
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
      renderItem={renderItem}
      {...rest}
    />
  );
};

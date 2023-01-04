import React from 'react';
import {StyleSheet} from 'react-native';
import {Typography} from '@/Components/Typography';
import {formatAmount} from '@/Utils/formatters';
import {TAccount} from '@/Store/Profile/types';
import {SelectPicker, TSelectPickerChildProps} from '.';

export const AccountSelector = ({
  value,
  ...rest
}: TSelectPickerChildProps<TAccount>) => {
  const renderItem = (item: TAccount) => {
    return (
      <>
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
      </>
    );
  };

  return (
    <SelectPicker
      label="Source Account"
      value={value?.number}
      renderItem={renderItem}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  textContent: {
    marginBottom: 4,
  },
});

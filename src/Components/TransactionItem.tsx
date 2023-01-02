import React from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import {COLORS} from '@/Constants/Colors';
import {DATE_FORMAT} from '@/Constants/Formats';
import {Typography} from '@/Components/Typography';
import {CaretLeft, CaretRight} from '@/Assets/Svg';
import {formatAmount} from '@/Utils/formatters';
import {TTransaction} from '@/Store/Payments/types';

type TTransactionItemProps = {
  item: TTransaction;
};

export const TransactionItem = ({item}: TTransactionItemProps) => {
  console.log(formatAmount(1000));
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContent}>
          <Typography size="14" weight="semibold" style={styles.label}>
            {'Amount: '}{' '}
            <Typography size="12">{formatAmount(item.amount)}</Typography>
          </Typography>
          <Typography size="14" weight="semibold" style={styles.label}>
            {'Date: '}
            <Typography size="12">
              {moment(item.date).format(DATE_FORMAT)}
            </Typography>
          </Typography>
          {!item.isIncoming && (
            <Typography size="14" weight="semibold" style={styles.label}>
              {'Recipient: '}
              <Typography size="12">{item.recipient}</Typography>
            </Typography>
          )}
        </View>
        {item.isIncoming ? (
          <CaretLeft color={COLORS.GREEN_800} />
        ) : (
          <CaretRight color={COLORS.RED_400} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 16,
    backgroundColor: COLORS.GREEN_100,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    paddingTop: 10,
  },
  label: {
    marginBottom: 6,
  },
});

import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, SchemaOf} from 'yup';
import {LAYOUTS} from '@/Constants/Layouts';
import {VALIDATION, bankSchema, accountSchema} from '@/Constants/Validation';
import {AppScreen} from '@/Components/AppScreen';
import {NumericInput} from '@/Components/Inputs/NumericInput';
import {AmountInput} from '@/Components/Inputs/AmountInput';
import {Button} from '@/Components/Buttons/Button';
import {AccountSelector} from '@/Components/SelectPicker/AccountSelector';
import {BankSelector} from '@/Components/SelectPicker/BankSelector';
import {BillsStackScreenProps} from '@/Navigation/types';
import {TAccount} from '@/Store/Profile/types';
import {TBank} from '@/Store/Payments/types';
import {emulateRequest} from '@/Utils/dev';
import {accounts, banks} from '@/Mock/index';

type TFormData = {
  sourceAccount: TAccount;
  bank: TBank;
  destinationAccount: string;
  amount: string;
};

const schema: SchemaOf<TFormData> = object({
  sourceAccount: accountSchema,
  bank: bankSchema,
  destinationAccount: VALIDATION.accountNumber,
  amount: VALIDATION.stringRequired,
});

export const Transfer = ({}: BillsStackScreenProps<'Transfer'>) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: TFormData) => {
    console.log(formData);
  };

  return (
    <AppScreen headerTitle="Transfer">
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <AccountSelector
            items={accounts}
            onSelect={onChange}
            value={value}
            error={errors.sourceAccount}
          />
        )}
        name="sourceAccount"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BankSelector
            items={banks}
            onSelect={onChange}
            value={value}
            error={errors.bank}
          />
        )}
        name="bank"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <NumericInput
            label="Destination Account"
            type="account"
            onChangeText={onChange}
            value={value}
            error={errors.destinationAccount}
          />
        )}
        name="destinationAccount"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <AmountInput
            onChangeText={onChange}
            value={value}
            error={errors.amount}
          />
        )}
        name="amount"
      />
      <Button
        title="Proceed"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: LAYOUTS.PADDING,
  },
});

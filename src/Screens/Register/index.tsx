import React from 'react';
import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {boolean, object, SchemaOf} from 'yup';
import {LAYOUTS} from '@/Constants/Layouts';
import {VALIDATION, MIN_NICKNAME_LENGTH} from '@/Constants/Validation';
import {AppScreen} from '@/Components/AppScreen';
import {BaseInput, TBaseInputProps} from '@/Components/Inputs/BaseInput';
import {PasswordInput} from '@/Components/Inputs/PasswordInput';
import {Button} from '@/Components/Buttons/Button';
import {Typography} from '@/Components/Typography';
import {COLORS} from '@/Constants/Colors';

type TFormData = {
  isNickChecked: boolean;
  isNickValidated: boolean;
  nickName: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema: SchemaOf<TFormData> = object({
  isNickChecked: boolean().required(),
  isNickValidated: boolean().required(),
  nickName: VALIDATION.nickName.test(
    'balanceAmount',
    'This nickname already exists',
    (value, context) =>
      value &&
      value?.length >= MIN_NICKNAME_LENGTH &&
      (context.parent.isNickValidated || !context.parent.isNickChecked),
  ),
  firstName: VALIDATION.stringRequired,
  lastName: VALIDATION.stringRequired,
  middleName: VALIDATION.stringOptional,
  email: VALIDATION.email,
  password: VALIDATION.passwordSetup,
  passwordConfirm: VALIDATION.passwordConfirm,
});

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    trigger,
    setValue,
    watch,
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });

  const {isNickChecked, isNickValidated} = watch();

  const nickOnEndEditing = ({
    nativeEvent: {text: nickName},
  }: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    if (nickName.length >= MIN_NICKNAME_LENGTH && !isNickChecked) {
      setValue('isNickChecked', true);
      setValue('isNickValidated', nickName === 'testing');
    }
    trigger('nickName');
  };

  const nickOnChange = () => {
    setValue('isNickChecked', false);
    setValue('isNickValidated', false);
    trigger('nickName');
  };

  const getNickIcon = (): Partial<TBaseInputProps> | undefined => {
    if (isNickChecked && isNickValidated) {
      return {icon: 'check', iconColor: COLORS.GREEN_500};
    }
    if (isNickChecked && !isNickValidated) {
      return {icon: 'attention', iconColor: COLORS.RED_300};
    }
  };
  const onSubmit = (data: any) => console.log(data);

  return (
    <AppScreen>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="Nickname"
            onChangeText={onChange}
            onChange={nickOnChange}
            onEndEditing={nickOnEndEditing}
            value={value}
            error={errors.nickName}
            {...getNickIcon()}
          />
        )}
        name="nickName"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="First Name"
            onChangeText={onChange}
            value={value}
            error={errors.firstName}
          />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="Last Name"
            onChangeText={onChange}
            value={value}
            error={errors.lastName}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="Middle Name (optional)"
            onChangeText={onChange}
            value={value}
            error={errors.middleName}
          />
        )}
        name="middleName"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="Email"
            onChangeText={onChange}
            value={value}
            error={errors.email}
          />
        )}
        name="email"
      />
      <Typography
        size="14"
        weight="semibold"
        style={styles.passwordRequirement}>
        Password should contain at least one lower/uppercase letter and number
      </Typography>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <PasswordInput
            label="Password"
            onChangeText={onChange}
            value={value}
            error={errors.password}
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <PasswordInput
            label="Confirm Password"
            onChangeText={onChange}
            value={value}
            error={errors.passwordConfirm}
          />
        )}
        name="passwordConfirm"
      />
      <Button
        title="Submit"
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
  passwordRequirement: {
    marginBottom: 12,
  },
});

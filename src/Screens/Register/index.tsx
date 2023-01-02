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
import {VALIDATION, NICKNAME_MIN_LENGTH} from '@/Constants/Validation';
import {COLORS} from '@/Constants/Colors';
import {AppScreen} from '@/Components/AppScreen';
import {BaseInput, TBaseInputProps} from '@/Components/Inputs/BaseInput';
import {PasswordInput} from '@/Components/Inputs/PasswordInput';
import {Button} from '@/Components/Buttons/Button';
import {Label} from '@/Components/Label';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';
import {emulateRequest} from '@/Utils/dev';

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
      value?.length >= NICKNAME_MIN_LENGTH &&
      (context.parent.isNickValidated || !context.parent.isNickChecked),
  ),
  firstName: VALIDATION.stringRequired,
  lastName: VALIDATION.stringRequired,
  middleName: VALIDATION.stringOptional,
  email: VALIDATION.email,
  password: VALIDATION.passwordSetup,
  passwordConfirm: VALIDATION.passwordConfirm,
});

export const Register = ({
  navigation,
}: BeforeAuthStackScreenProps<'Register'>) => {
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
    if (nickName.length >= NICKNAME_MIN_LENGTH && !isNickChecked) {
      emulateRequest(1500, nickName === 'Testing')
        .then(() => setValue('isNickValidated', true))
        .catch(() => {})
        .finally(() => {
          setValue('isNickChecked', true);
          trigger('nickName');
        });
    }
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

  const onSubmit = (formData: TFormData) => {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'Onboarding'},
        {name: 'Login', params: {login: formData.nickName}},
      ],
    });

    navigation.navigate('PopUpModal', {title: 'Registration completed'});
  };

  return (
    <AppScreen headerTitle="Register">
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
      <Label>
        Password should contain at least one lower/uppercase letter and number
      </Label>
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
        title="Register"
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

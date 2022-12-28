import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, SchemaOf} from 'yup';
import {LAYOUTS} from '@/Constants/Layouts';
import {VALIDATION} from '@/Constants/Validation';
import {AppScreen} from '@/Components/AppScreen';
import {BaseInput} from '@/Components/Inputs/BaseInput';
import {Button} from '@/Components/Buttons/Button';
import {Typography} from '@/Components/Typography';

type TFormData = {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema: SchemaOf<TFormData> = object({
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
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <AppScreen>
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
          <BaseInput
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
          <BaseInput
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

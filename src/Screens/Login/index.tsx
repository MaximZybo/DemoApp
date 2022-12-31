import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, SchemaOf} from 'yup';
import {useAppDispatch} from '@/Hooks/redux';
import {setIsSignedIn} from '@/Store/Profile/profileSlice';
import {LAYOUTS} from '@/Constants/Layouts';
import {VALIDATION} from '@/Constants/Validation';
import {AppScreen} from '@/Components/AppScreen';
import {BaseInput} from '@/Components/Inputs/BaseInput';
import {Button} from '@/Components/Buttons/Button';
import {BeforeAuthStackScreenProps} from '@/Navigation/types';
import {emulateRequest} from '@/Utils/dev';

type TFormData = {
  login: string;
  password: string;
};

const schema: SchemaOf<TFormData> = object({
  login: VALIDATION.nickName,
  password: VALIDATION.password,
});

export const Login = ({
  navigation,
  route,
}: BeforeAuthStackScreenProps<'Login'>) => {
  const initialLogin = route.params?.login;

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {login: initialLogin},
  });

  const onSubmit = (data: TFormData) => {
    emulateRequest(1000, data.login === 'testing')
      .then(() => {
        dispatch(setIsSignedIn());
      })
      .catch(() => {
        navigation.navigate('PopUpModal', {title: 'Incorrect login'});
      });
  };

  return (
    <AppScreen headerTitle="Login">
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <BaseInput
            label="Login"
            onChangeText={onChange}
            value={value}
            error={errors.login}
          />
        )}
        name="login"
      />
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
      <Button
        title="Login"
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

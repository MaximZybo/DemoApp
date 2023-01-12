import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import ReactNativeBiometrics from 'react-native-biometrics';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, SchemaOf} from 'yup';
import {useAppDispatch, useAppSelector} from '@/Hooks/redux';
import {useBiometrics} from '@/Hooks/useBiometrics';
import {setIsSignedIn} from '@/Store/Profile/profileSlice';
import {getIsBiometryEnabled} from '@/Store/Persist/selectors';
import {getCredentials, setCredentials} from '@/Utils/Storage/authStorage';
import {LAYOUTS} from '@/Constants/Layouts';
import {VALIDATION} from '@/Constants/Validation';
import {COLORS} from '@/Constants/Colors';
import {AppScreen} from '@/Components/AppScreen';
import {BaseInput} from '@/Components/Inputs/BaseInput';
import {PasswordInput} from '@/Components/Inputs/PasswordInput';
import {Button} from '@/Components/Buttons/Button';
import {PressableOpacity} from '@/Components/Buttons/PressableOpacity';
import {Fingerprint} from '@/Assets/Svg';
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

  const isBiometryEnabled = useAppSelector(getIsBiometryEnabled);

  const {isSensorAvailable} = useBiometrics();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {login: initialLogin},
  });

  useEffect(() => {
    getCredentials()
      .then(credentials => {
        if (credentials) {
          setValue('login', credentials.userId);
        }
      })
      .catch(() => {
        // send error report
      });
  }, [setValue]);

  const onSubmit = (data: TFormData) => {
    emulateRequest(1000, data.login === 'Testing')
      .then(() => {
        setCredentials({userId: data.login, password: data.password});

        dispatch(setIsSignedIn());
      })
      .catch(() => {
        navigation.navigate('PopUpModal', {title: 'Incorrect login'});
      });
  };

  const biometricsSignIn = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm biometrics'})
      .then(({success}) => {
        if (success) {
          getCredentials()
            .then(credentials => {
              if (credentials) {
                emulateRequest(1000, credentials.userId === 'Testing')
                  .then(() => {
                    dispatch(setIsSignedIn());
                  })
                  .catch(() => {
                    // if response says that the password is incorrect,
                    // disable biometrics usage
                  });
              }
            })
            .catch(() => {
              // send error report
            });
        }
      })
      .catch(() => {
        // send error report
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
          <PasswordInput
            label="Password"
            onChangeText={onChange}
            value={value}
            error={errors.password}
          />
        )}
        name="password"
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          style={styles.buttonLogin}
        />
        {isBiometryEnabled && isSensorAvailable && (
          <PressableOpacity
            onPress={biometricsSignIn}
            style={styles.buttonBiometrics}>
            <Fingerprint color={COLORS.ICON_DEFAULT} />
          </PressableOpacity>
        )}
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: LAYOUTS.PADDING,
    alignItems: 'center',
  },
  buttonLogin: {
    flex: 1,
    marginBottom: 0,
  },
  buttonBiometrics: {
    marginLeft: LAYOUTS.PADDING,
    backgroundColor: COLORS.GREEN_400,
    padding: 10,
    borderRadius: 22,
  },
});

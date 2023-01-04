import {object, string, ref, SchemaOf, number, boolean} from 'yup';
import {TBank} from '@/Store/Payments/types';
import {TAccount} from '@/Store/Profile/types';

export const NICKNAME_MIN_LENGTH = 6;
const PASSWORD_MIN_LENGTH = 6;

export const VALIDATION = {
  stringRequired: string().required(''),
  stringOptional: string().optional(),
  nickName: string()
    .required('')
    .min(NICKNAME_MIN_LENGTH, `Min length is ${NICKNAME_MIN_LENGTH}`),
  email: string().required('').email('Not a valid email'),
  password: string()
    .required('')
    .min(PASSWORD_MIN_LENGTH, `Min length is ${PASSWORD_MIN_LENGTH}`),
  passwordSetup: string()
    .required('')
    .min(PASSWORD_MIN_LENGTH, `Min length is ${PASSWORD_MIN_LENGTH}`)
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$)/,
      'Does not match requirements',
    ),

  // compare field should be 'password'
  passwordConfirm: string()
    .required('')
    .oneOf([ref('password')], "Passwords don't match"),
};

export const bankSchema: SchemaOf<TBank> = object({
  code: string().required(),
  name: string().required(),
});

export const accountSchema: SchemaOf<TAccount> = object({
  balance: number().required(),
  isActive: boolean().required(),
  number: string().required(),
  type: string().required(),
});

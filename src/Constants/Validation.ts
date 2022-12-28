import {string, ref} from 'yup';

export const VALIDATION = {
  stringRequired: string().required(''),
  stringOptional: string().optional(),
  email: string().required('').email('Not a valid email'),
  passwordSetup: string()
    .required('')
    .min(6, 'Min length is 6')
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$)/,
      'Does not match requirements',
    ),

  // compare field should be 'password'
  passwordConfirm: string()
    .required('')
    .oneOf([ref('password')], "Passwords don't match"),
};

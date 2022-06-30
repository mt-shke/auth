import {object, string, number, mixed} from 'yup';

export const loginSchema = object().shape({
  email: string()
    .required('Email is missing')
    .min(6, 'Email is too small')
    .max(40, 'Email is too long'),
  password: string()
    .min(6, 'Password is too small')
    .max(40, 'Password is too long'),
});

export const signUpSchema = object().shape({
  email: string()
    .required('Email is missing')
    .min(6, 'Email is too small')
    .max(40, 'Email is too long'),
  password: string()
    .min(6, 'Password is too small')
    .max(40, 'Password is too long'),
  passwordConfirmation: string().max(40, 'Password is too long'),
  // check if same
});

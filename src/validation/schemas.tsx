import { z } from 'zod';

export const passwordSchema = z
  .string()
  .refine(
    value => value.length >= 7,
    'Minimum password length is 7 characters!'
  )
  .refine(
    value => /[A-Z]/.test(value),
    'Password must contain at least one upper case letter!'
  )
  .refine(
    value => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value),
    'Password must contain at least one special character!'
  );

export const nameSchema = z
  .string()
  .min(1, 'Please specify a name!')
  .refine(
    value => !/[`!@#$%^&_+=\[\]{};:\\|<>\?~]/.test(value),
    'Name may not contain special characters!'
  );

export const looseOptional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(
    (value: unknown) =>
      value === null || (typeof value === 'string' && value === '')
        ? undefined
        : value,
    schema.optional()
  );

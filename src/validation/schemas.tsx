import { z } from 'zod';

const passwordSchema = z
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

const nameSchema = z
  .string()
  .min(1, 'Please specify a name!')
  .refine(
    value => !/[`!@#$%^&_+=\[\]{};:\\|<>\?~]/.test(value),
    'Name may not contain special characters!'
  );

//
// const looseOptional = <T extends z.ZodTypeAny>(schema: T) =>
//   z.preprocess(
//     (value: unknown) =>
//       value === null || (typeof value === 'string' && value === '')
//         ? undefined
//         : value,
//     schema.optional()
//   );

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please specify an email!')
    .email('Please specify a valid email!'),
  password: passwordSchema,
});

export const RegisterSchema = LoginSchema.extend({
  firstName: nameSchema,
  lastName: nameSchema,
  passwordRepeat: z.string().min(1, 'Please repeat the password!'),
}).superRefine((values, ctx) => {
  if (values.password !== values.passwordRepeat) {
    ctx.addIssue({
      message: "Passwords don't match!",
      code: z.ZodIssueCode.custom,
      path: ['passwordRepeat'],
    });
  }
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
export type TLoginSchema = z.infer<typeof LoginSchema>;

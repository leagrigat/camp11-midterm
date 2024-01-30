import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid Email address. Should include @ Sign.'),
  password: z
    .string()
    .min(8, 'Must be 8 or more characters long')
    .refine(
      value => /[A-Z]/.test(value),
      'Password must contain at least one upper case letter!'
    )
    .refine(
      value => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value),
      'Password must contain at least one special character!'
    ),
});

export const userSchema = loginSchema.extend({
  firstName: z
    .string()
    .min(2, 'First Name must be at least 2 characters.')
    .max(15, 'First Name can be maximum 15 characters.'),
  lastName: z
    .string()
    .min(2, 'Last Name must be at least 2 characters.')
    .max(15, 'Last Name can be maximum 15 characters.'),
});

export type UserSchema = z.infer<typeof userSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;

import Input from '../components/Input';
import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { passwordSchema } from '../validation/schemas';

const formSchema = z
  .object({
    firstName: z.string().min(1, 'Please specify a first name!'),
    lastName: z.string().min(1, 'Please specify a last name!'),
    email: z
      .string()
      .min(1, 'Please specify an email!')
      .email('Please specify a valid email!'),
    password: passwordSchema,
    passwordRepeat: passwordSchema,
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.passwordRepeat) {
      ctx.addIssue({
        message: 'Passwords don\'t match!',
        code: z.ZodIssueCode.custom,
        path: ['passwordRepeat'],
      });
    }
  });
type FormFields = z.infer<typeof formSchema>;

function RegistrationForm() {
  const { control, handleSubmit, trigger } = useForm<FormFields>({
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  });

  const handleOnChangeText = (
    value: string,
    onChange: (...event: string[]) => void
  ) => {
    onChange(value);
    trigger('passwordRepeat');
  };

  return (
    <div className="px-5 py-8 flex flex-col h-full">
      <form
        onSubmit={handleSubmit(e => console.log(e))}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed flex flex-col gap-3">
          <Controller
            name="firstName"
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Input
                  id="firstName"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  type="text"
                  placeholder="First Name"
                />
                {Boolean(error) && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Input
                  id="lastName"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  type="text"
                  placeholder="Last Name"
                />
                {Boolean(error) && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Input
                  id="email"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  type="email"
                  autoComplete="username"
                  placeholder="Your Email"
                />
                {Boolean(error) && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Input
                  id="password"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Your Password"
                />
                {Boolean(error) && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name="passwordRepeat"
            control={control}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <Input
                  id="passwordRepeat"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={e => handleOnChangeText(e.target.value, onBlur)}
                  error={Boolean(error)}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat your Password"
                />
                {Boolean(error) && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <Button type="submit" size="sm">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;

import Input from '../components/Input';
import Button from '../components/Button';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { passwordSchema } from '../validation/schemas';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please specify an email!')
    .email('Please specify a valid email!'),
  password: passwordSchema,
});

type FormFields = z.infer<typeof loginSchema>;

function LoginPage() {
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="px-5 py-8 flex flex-col h-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-base font-bold">
          Welcome to Cine-Scape
        </h2>
        <p className="text-white-dimmed text-sm text-medium mb-8">
          You need to log in to be able to make reservations and add movies to
          your watchlist.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(e => console.log(e))}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed flex flex-col gap-3">
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
                  placeholder="your@email.com"
                  icon={<MdOutlineEmail />}
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
                  type="password"
                  id="password"
                  required
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  placeholder="Enter your Password"
                  icon={<RiLockPasswordLine />}
                />
                {error && (
                  <p className="text-error text-sm text-medium mb-4">
                    {error?.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
        <Button type="submit" size={'sm'}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

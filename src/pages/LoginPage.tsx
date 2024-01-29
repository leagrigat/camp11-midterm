import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TLoginSchema, LoginSchema } from '../validation/schemas';
import Input from '../components/Input';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    mode: 'onTouched',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: TLoginSchema) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-white-dimmed flex flex-col gap-3">
          <Input
            id="email"
            placeholder="Your Email"
            autoComplete="email"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            id="password"
            placeholder="Your Password"
            autoComplete="current-password"
            type="password"
            error={errors.password}
            {...register('password')}
          />
          <Button type="submit" size={'sm'}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

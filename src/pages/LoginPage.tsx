import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TLoginSchema, LoginSchema } from '../validation/schemas';
import Input from '../components/Input';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import GreetingHeader from '../components/GreetingHeader';

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

  const navigate = useNavigate();

  // changed to const convention like in RegistrationForm so function submitHandler could be deleted
  const onSubmit = async (data: TLoginSchema) => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log(res); // handle the response data
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <GreetingHeader
        title="Welcome to Cine-Scape"
        description="You need to log in to be able to make reservations and add movies to your watchlist."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed flex flex-col gap-3">
          <Input
            id="email"
            placeholder="Your Email"
            autoComplete="email"
            type="email"
            error={errors.email}
            {...register('email')}
            icon={<MdOutlineEmail className="h-6 w-6" />}
          />
          <Input
            id="password"
            placeholder="Your Password"
            autoComplete="current-password"
            type="password"
            error={errors.password}
            {...register('password')}
            icon={<RiLockPasswordLine className="h-6 w-6" />}
          />
          <div className="flex gap-2 justify-end text-sm text-medium">
            <span>Don't have an account yet?</span>
            <Link
              to={'/register'}
              className="cursor-pointer underline text-primary"
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
        <Button type="submit" size="sm">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

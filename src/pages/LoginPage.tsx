import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TLoginSchema, LoginSchema } from '../validation/schemas';
import Input from '../components/Input';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import GreetingHeader from '../components/GreetingHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { checkAuthContext } from '../context/CheckAuthProvider';
import { loginUser } from '../api/user';

function LoginPage() {
  const { setUserIsLoggedIn } = useContext(checkAuthContext);
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
      const res = await loginUser(data); // res.data = {isLoggedIn: true}
      setUserIsLoggedIn(res.data.isLoggedIn);
      // handle the response data return isLogged in true or false
      //get request /checkAuth after login
      //useeffect runs [userIsLoggedIn]

      toast.success(
        <span>
          Login successful! <br />
          Welcome to CineScape!
        </span>
      );
      navigate('/home');
    } catch (error) {
      toast.error(
        <span>
          Login failed! <br />
          Please try again.
        </span>
      );
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
        className="flex flex-col justify-between flex-grow"
      >
        <div className="flex flex-col gap-3 text-white-dimmed">
          <Input
            data-testid="email"
            id="email"
            placeholder="Your Email"
            autoComplete="email"
            type="email"
            error={errors.email}
            {...register('email')}
            icon={<MdOutlineEmail className="w-6 h-6" />}
          />
          <Input
            data-testid="password"
            id="password"
            placeholder="Your Password"
            autoComplete="current-password"
            type="password"
            error={errors.password}
            {...register('password')}
            icon={<RiLockPasswordLine className="w-6 h-6" />}
          />
          <div className="flex justify-end gap-2 text-sm text-medium">
            <span>Don't have an account yet?</span>
            <Link
              to={'/register'}
              className="underline cursor-pointer text-primary"
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

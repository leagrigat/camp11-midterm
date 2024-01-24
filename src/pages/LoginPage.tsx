import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import GreetingHeader from '../components/GreetingHeader';

function LoginPage() {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  });

  // changed to const convention like in RegistrationForm so function submitHandler could be deleted
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-full">
      <GreetingHeader
        title="Welcome to Cine-Scape"
        description="You need to log in to be able to make reservations and add movies to your watchlist."
      />

      <form
        onSubmit={e => submitHandler(e)}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed flex flex-col gap-3">
          <Input
            id="email"
            value={inputVal.email}
            onChange={e =>
              setInputVal({
                ...inputVal,
                email: e.target.value,
              })
            }
            placeholder="your@email.com"
            icon={<MdOutlineEmail className="h-6 w-6" />}
          />
          <Input
            type="password"
            id="password"
            value={inputVal.password}
            onChange={e =>
              setInputVal({
                ...inputVal,
                password: e.target.value,
              })
            }
            placeholder="Enter your Password"
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

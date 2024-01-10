import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

function LoginPage() {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputVal);
  }

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
        onSubmit={e => submitHandler(e)}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed">
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
            icon={<MdOutlineEmail />}
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
            icon={<RiLockPasswordLine />}
          />
        </div>
        <Button type="submit" className="text-sm font-bold">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

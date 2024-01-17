import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { passwordSchema } from '../validation/schemas';
import InputControlled from '../components/InputControlled';

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

  const handleDefault = (
    value: string,
    onChange: (...event: string[]) => void
  ) => {
    onChange(value);
  };

  type InputField = {
    name: 'email' | 'password' ;
    placeholder: string;
    type: string;
    autocomplete: string;
    ocTrigger: (value: string, onChange: (...event: string[]) => void) => void;
    obTrigger: (value: string, onChange: (...event: string[]) => void) => void;
  };

  const inputFields: InputField[] = [
    {
      name: 'email',
      placeholder: 'Your Email',
      type: 'email',
      autocomplete: 'email',
      ocTrigger: handleDefault,
      obTrigger: handleDefault,
    },
    {
      name: 'password',
      placeholder: 'Your Password',
      type: 'password',
      autocomplete: 'current-password',
      ocTrigger: handleDefault,
      obTrigger: handleDefault,
    },
  ];

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
        {inputFields.map(inputField => (
            <InputControlled
              control={control}
              name={inputField.name}
              placeholder={inputField.placeholder}
              type={inputField.type}
              autocomplete={inputField.autocomplete}
              ocTrigger={inputField.ocTrigger}
              obTrigger={inputField.obTrigger}
            />
          ))}
        </div>
        <Button type="submit" size={'sm'}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

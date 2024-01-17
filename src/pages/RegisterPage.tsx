import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { nameSchema, passwordSchema } from '../validation/schemas';
import InputControlled from '../components/InputControlled';

let repeatTouched = false;

const formSchema = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: z
      .string()
      .min(1, 'Please specify an email!')
      .email('Please specify a valid email!'),
    password: passwordSchema,
    passwordRepeat: z.string().min(1, 'Please repeat the password!'),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.passwordRepeat) {
      ctx.addIssue({
        message: "Passwords don't match!",
        code: z.ZodIssueCode.custom,
        path: ['passwordRepeat'],
      });
    }
  });
type FormFields = z.infer<typeof formSchema>;

function RegisterPage() {
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

  const handleDefault = (
    value: string,
    onChange: (...event: string[]) => void
  ) => {
    onChange(value);
  };

  const handleOnPassword = (
    value: string,
    onChange: (...event: string[]) => void
  ) => {
    onChange(value);
    if (repeatTouched) {
      trigger('passwordRepeat');
    }
  };

  const handleOnRepeat = (
    value: string,
    onChange: (...event: string[]) => void
  ) => {
    repeatTouched = true;
    console.log(
      (event!.target! as HTMLTextAreaElement).attributes!.getNamedItem('id')!
        .value === 'passwordRepeat'
    );
    onChange(value);
    trigger('passwordRepeat');
  };

  type InputField = {
    name: 'firstName' | 'lastName' | 'email' | 'password' | 'passwordRepeat';
    placeholder: string;
    type: string;
    autocomplete: string;
    ocTrigger: (value: string, onChange: (...event: string[]) => void) => void;
    obTrigger: (value: string, onChange: (...event: string[]) => void) => void;
  };

  const inputFields: InputField[] = [
    {
      name: 'firstName',
      placeholder: 'First Name',
      type: 'text',
      autocomplete: 'given-name',
      ocTrigger: handleDefault,
      obTrigger: handleDefault,
    },
    {
      name: 'lastName',
      placeholder: 'Last Name',
      type: 'text',
      autocomplete: 'family-name',
      ocTrigger: handleDefault,
      obTrigger: handleDefault,
    },
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
      autocomplete: 'new-password',
      ocTrigger: handleOnPassword,
      obTrigger: handleDefault,
    },
    {
      name: 'passwordRepeat',
      placeholder: 'Repeat your Password',
      type: 'password',
      autocomplete: 'new-password',
      ocTrigger: handleDefault,
      obTrigger: handleOnRepeat,
    },
  ];

  return (
    <div className="px-5 py-8 flex flex-col h-full">
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
        <Button type="submit" size="sm">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;

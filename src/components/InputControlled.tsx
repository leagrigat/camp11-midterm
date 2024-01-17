import { Controller, Control } from 'react-hook-form';
import Input from './Input';

type Props = {
  control: Control<any>;
  name: 'firstName' | 'lastName' | 'email' | 'password' | 'passwordRepeat';
  placeholder: string;
  type: string;
  autocomplete: string;
  ocTrigger: (value: string, onChange: (...event: string[]) => void) => void;
  obTrigger: (value: string, onBlur: (...event: string[]) => void) => void;
};

function InputControlled({
  control,
  name,
  placeholder,
  type,
  autocomplete,
  ocTrigger,
  obTrigger,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Input
            id={name}
            required
            value={value}
            onChange={e => ocTrigger(e.target.value, onChange)}
            onBlur={e => obTrigger(e.target.value, onBlur)}
            error={Boolean(error)}
            type={type}
            placeholder={placeholder}
            autoComplete={autocomplete}
          />

          {Boolean(error) && (
            <p className="text-error text-sm text-medium mb-1">
              {error?.message}
            </p>
          )}
        </>
      )}
    />
  );
}

export default InputControlled;

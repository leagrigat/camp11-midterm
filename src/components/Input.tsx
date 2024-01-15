import React from 'react';
import { cn } from '../utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  id: string;
  icon?: React.ReactElement;
  error?: boolean;
  isRounded?: boolean;
}

function Input({ id, isRounded, icon, error, ...props }: Props) {
  return (
    <div
      className={cn(
        'gap-2  py-3 rounded-lg bg-white-heavy',
        isRounded && 'rounded-full', error&&'ring ring-error'
      )}
    >
      <label htmlFor={id} className="flex items-center gap-5">
        <div className="text-white-dimmed pl-5">{icon}</div>
        <input
          id={id}
          {...props}
          className="bg-white-heavy placeholder-white-dimmed text-white size-full text-sm outline-none"
        />
      </label>
    </div>
  );
}

export default Input;

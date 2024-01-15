import React from 'react';
import { cn } from '../utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  id: string;
  icon?: React.ReactElement;
  isRounded?: boolean;
}

function Input({ id, isRounded, icon, ...props }: Props) {
  return (
    <div
      className={cn(
        'gap-2 py-3 px-4 rounded-lg bg-white-heavy',
        isRounded && 'rounded-full'
      )}
    >
      <label htmlFor={id} className="flex items-center gap-5">
        <div className="text-white-dimmed">{icon}</div>
        <input
          id={id}
          {...props}
          className="bg-white-heavy placeholder-white-dimmed text-white size-full outline-none text-sm"
        />
      </label>
    </div>
  );
}

export default Input;

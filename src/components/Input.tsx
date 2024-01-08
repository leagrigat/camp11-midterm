import React from 'react';
import { cn } from '../utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  id: string;
  icon: React.ReactElement;
  isRounded?: boolean;
}

function Input({ id, isRounded, icon, ...props }: Props) {
  return (
    <div
      className={cn(
        'gap-2 mb-5 py-3 px-4 rounded-lg bg-dark-light',
        isRounded && 'rounded-full'
      )}
    >
      <label htmlFor={id} className="flex items-center gap-5">
        <div className="text-white-dimmed py-3 pl-5">{icon}</div>
        <input
          id={id}
          {...props}
          className="bg-dark-light placeholder-white-dimmed"
        />
      </label>
    </div>
  );
}

export default Input;

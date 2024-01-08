import React from 'react';
import { cn } from '../utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  id: string;
  label: string;
  icon: React.ReactElement;
  isRounded?: boolean;
}

function Input({ id, label, isRounded, icon, ...props }: Props) {
  return (
    <div
      className={cn(
        'gap-2 mb-5 mx-5 py-3 px-4 rounded-lg bg-white-heavy',
        isRounded && 'rounded-full'
      )}
    >
      <label htmlFor={id} className="flex items-center gap-5">
        <div className="text-white-dimmed py-3 pl-5">{icon}</div>
        <input
          id={id}
          {...props}
          onChange={() => {}}
          className="bg-white-heavy placeholder-white-dimmed"
        />
      </label>
    </div>
  );
}

export default Input;

import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  dateTime: string;
  active?: boolean;
}

function BoringGenreButton({
  children,
  dateTime = '',
  active = false,
  ...props
}: Props) {
  return (
    // <div className="flex justify-center w-1/4">
      <button
        {...props}
        className={cn(
          'disabled:text-dark-light text-center rounded-[0.25rem] text-sm font-medium w-[4.375rem] h-[1.8125rem]',
          active ? 'bg-primary text-dark-light' : 'text-white-dimmed'
        )}
      >
        {dateTime}
      </button>
    // </div>
  );
}

export default BoringGenreButton;

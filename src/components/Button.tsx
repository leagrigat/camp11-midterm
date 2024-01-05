import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

function Button({
  children,
  variant = 'primary',
  size = 'lg',
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        'text-white  rounded-md',
        variant === 'primary' && 'bg-primary',
        variant === 'secondary' && 'bg-secondary',
        size === 'sm' && 'text-sm py-2 px-4',
        size === 'md' &&
          'text-sm py-2 px-6 text-center w-[335px] h-[38px] rounded-[8px]',
        size === 'lg' &&
          'text-sm py-2 px-6 text-center w-[335px] h-[49px] rounded-[8px]'
      )}
    >
      {children}
    </button>
  );
}

export default Button;

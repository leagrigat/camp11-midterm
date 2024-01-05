import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'disabled';
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
        variant === 'primary' && 'bg-primary text-dark-light',
        variant === 'secondary' && 'bg-secondary text-white',
        variant === 'disabled' && 'bg-primary-dimmed text-dark-light',
        size === 'sm' &&
          'text-[12px] text-center w-[335px] h-[38px] rounded-[8px]',

        size === 'md' &&
          'text-[14px] text-center w-[215px] h-[49px] rounded-[8px]',

        size === 'lg' &&
          'text-[14px] text-center w-[335px] h-[49px] rounded-[8px]'
      )}
    >
      {children}
    </button>
  );
}

export default Button;

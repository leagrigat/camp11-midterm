import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
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
        'disabled:bg-primary-dimmed font-bold text-sm text-center rounded-[8px] w-full',
        variant === 'primary' && 'bg-primary text-dark-light',
        variant === 'secondary' && 'bg-secondary text-white',
        size === 'sm' && 'text-[12px] h-[38px]',
        size === 'lg' && 'text-[14px] h-[49px] min-h-[49px]'
      )}
    >
      {children}
    </button>
  );
}

export default Button;

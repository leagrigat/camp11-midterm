import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}

// as an alternative to writing each style in a single line | Nachschlageobjects
/* const styleDictionary = {
  sm: 'text-[12px] h-[38px]',
  md: '',
  lg: 'text-[14px] h-[49px] min-h-[49px]',
  primary: 'bg-primary text-dark-light',
  secondary: 'bg-secondary text-white',
}; */

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
        // those two lines could replace variant and size specifications
        // styleDictionary[variant],
        // styleDictionary[size],
        variant === 'primary' && 'bg-primary text-dark-light',
        variant === 'secondary' && 'bg-secondary text-white',
        size === 'sm' && 'text-[12px] h-[38px]',
        size === 'md' && '',
        size === 'lg' && 'text-[14px] h-[49px] min-h-[49px]'
      )}
    >
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  variant?: 'free' | 'occupuied' | 'selected';
}

function SeatBtn({ children, variant = 'free', ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(
        'w-[28px] h-[28px] rounded-[4px]',
        variant === 'free' && ' bg-dark-light',
        variant === 'occupuied' && 'bg-white',
        variant === 'selected' && 'bg-primary'
      )}
    >
      {children}
    </button>
  );
}
export default SeatBtn;

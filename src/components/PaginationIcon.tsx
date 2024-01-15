import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  page?: number | null;
  variant?: 'selected' | 'unselected';
}

function PaginationIcon({
  children,
  variant = 'unselected',
  page = null,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
<<<<<<< HEAD
        // changed text font size to 12px (xs) like in screen design
        'text-center text-dark-light rounded-[2px] w-[32px] h-[32px] text-xs',
=======
        'text-xs text-center text-dark-light rounded-[2px] w-[32px] h-[32px]',
>>>>>>> 09c9f8337d6fbb4790578289d7dc2db066d71d25
        variant === 'selected' && 'bg-primary',
        variant === 'unselected' && 'bg-white-dimmed'
      )}
    >
      {children}
    </button>
  );
}

export default PaginationIcon;

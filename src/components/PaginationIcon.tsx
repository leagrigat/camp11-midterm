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
        'text-center rounded-[2px] w-[32px] h-[32px]',
        variant === 'selected' && 'bg-primary text-dark-light',
        variant === 'unselected' && 'bg-white-dimmed text-dark-light'
      )}
    >
      {children}
    </button>
  );
}

export default PaginationIcon;

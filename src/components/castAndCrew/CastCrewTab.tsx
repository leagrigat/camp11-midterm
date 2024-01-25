import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function CastCrewTab({ children }: ButtonProps) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={cn('w-1/2 py-1 rounded-md',
            selected
              ? ' bg-white-dimmed text-white border border-white'
              : ' bg-dark-light text-white-dimmed'
              )}
        >
          {children}
        </button>
      )}
    </Tab>
  );
}

export default CastCrewTab;

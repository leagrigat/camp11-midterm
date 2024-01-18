import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function CastCrewTab({ children }: ButtonProps) {
  return (
    <>
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={`py-1 px-16 rounded-md ${
              selected
                ? ' bg-white-dimmed text-white border border-white'
                : ' bg-dark-light text-white-dimmed'
            }`}
          >
            {children}
          </button>
        )}
      </Tab>
    </>
  );
}

export default CastCrewTab;

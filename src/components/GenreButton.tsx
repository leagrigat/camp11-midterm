import React from 'react';
import { genresLibrary } from '../context/GenreLibrary';
import { cn } from '../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  genreId?: number | null;
  genre?: string | null;
}

function filterThis(filterTerm: number | string) {
  if (typeof filterTerm === 'string') {
    return genresLibary.filter(obj => {
      return obj.genre === filterTerm;
    })[0];
  } else {
    return genresLibary.filter(obj => {
      return obj.id === filterTerm;
    })[0];
  }
}

function GenreButton({
  children,
  genreId = null,
  genre = null,
  ...props
}: Props) {
  let buttonInfo = null;
  if (!genreId && genre) {
    buttonInfo = filterThis(genre);
  } else {
    buttonInfo = filterThis(genreId!);
  }
  genre = buttonInfo.genre;
  const emoji = buttonInfo!.emoji;
  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <button
        {...props}
        className={cn(
          'text-center rounded-[0.75rem]  text-3xl w-14 h-14',
          buttonInfo!.isSelected ? 'bg-white-dimmed' : 'bg-dark-light'
        )}
      >
        <p className="w-full text-center">{emoji}</p>
      </button>
      <div className="flex justify-center w-14">
        <h5 className="text-xs font-bold text-white-dimmed">{genre}</h5>
      </div>
    </div>
  );
}

export default GenreButton;

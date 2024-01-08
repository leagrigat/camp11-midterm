import React from 'react';
import { genresLibary } from '../context/GenreProvider';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  genreId?: number | null;
  genre?: string | null;
}

function filterById(gId: number) {
  return genresLibary.filter(obj => {
    return obj.id === gId;
  })[0];
}

function filterByGenre(genre: String) {
  return genresLibary.filter(obj => {
    return obj.genre === genre;
  })[0];
}

function GenreButton({
  children,
  genreId = null,
  genre = null,
  ...props
}: Props) {
  if (!genreId && genre) {
    genreId = filterByGenre(genre).id;
  }
  if (genreId && !genre) {
    genre = filterById(genreId).genre;
  }
  const emoji = filterById(genreId!).emoji;
  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <button
        {...props}
        className="bg-white-dimmed disabled:bg-dark-light text-center rounded-[0.75rem] text-center text-3xl w-14 h-14"
      >
        <p className="w-full text-center">{emoji}</p>
        {children}
      </button>
      <div className="flex justify-center w-14"><h5 className="text-xs font-bold text-white-dimmed">{genre}</h5></div>
    </div>
  );
}

export default GenreButton;

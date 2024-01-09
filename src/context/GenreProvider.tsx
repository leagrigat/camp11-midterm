import React, { createContext } from 'react';
import { genresLibrary } from './GenreLibrary';

type Props = {
  children: React.ReactNode;
};

type GenreType = {
  genre: string;
  emoji: string;
  id: number;
  isSelected: boolean;
};

type GenreContextType = {
  genreLibrary: GenreType[];
  toggleGenre: (id: number) => void;
  filterGenreLibrary;
};

export const GenreContext = createContext<GenreContextType>({
  genres: [],
});

function GenreProvider() {
  return <div></div>;
}

export default GenreProvider;

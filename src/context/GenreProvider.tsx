import React, { createContext, useEffect, useState } from 'react';
import { genresLibrary } from './GenreLibrary';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  genres: typeof genresLibrary; //autogenerate type from genresLibrary
  updateGenre: (id: number) => void;
  selectedCount: number;
};

export const GenreContext = createContext<ContextType>({
  genres: [],
  updateGenre: () => {},
  selectedCount: 0,
});

function GenreProvider({ children }: Props) {
  const [genres, setGenres] = useState(genresLibrary);

  //set count
  const [selectedCount, SetSelectedCount] = useState(0);

  useEffect(() => {
    const count = genres.filter(genre => genre.isSelected).length;
    SetSelectedCount(count);
  }, [genres]);

  //toggle GenreButton
  function updateGenre(genreId: number) {
    const updatedGenres = genres.map(genre => {
      if (genre.id === genreId) {
        genre.isSelected = !genre.isSelected;
      }
      return genre;
    });
    setGenres(updatedGenres);
  }

  return (
    <>
      <GenreContext.Provider value={{ genres, updateGenre, selectedCount }}>
        {children}
      </GenreContext.Provider>
    </>
  );
}

export default GenreProvider;

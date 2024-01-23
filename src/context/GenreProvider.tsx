import React, { createContext, useEffect, useState } from 'react';
import { genresLibrary } from './GenreLibrary';
import { genresLibraryType } from '../utils/genresLibraryType';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  genres: genresLibraryType[];
  updateGenre: (id: number) => void;
  selectedCount: number;
};

export const GenreContext = createContext<ContextType>({
  genres: [],
  updateGenre: () => {},
  selectedCount: 0,
});

//local storage
//1. get items
const storedGenresString = localStorage.getItem('genres');
//2. check if we have items if not empty []
const storedGenres = storedGenresString
  ? JSON.parse(storedGenresString)
  : genresLibrary;

function GenreProvider({ children }: Props) {
  const [genres, setGenres] = useState<genresLibraryType[]>(storedGenres);

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
    //handing the updatedGenres to saveLocalStorage
    saveLocalStorage(updatedGenres);
  }

  //passing the updated genres to
  const saveLocalStorage = (genres: genresLibraryType[]) => {
    localStorage.setItem('genres', JSON.stringify(genres));
  };

  return (
    <>
      <GenreContext.Provider value={{ genres, updateGenre, selectedCount }}>
        {children}
      </GenreContext.Provider>
    </>
  );
}

export default GenreProvider;

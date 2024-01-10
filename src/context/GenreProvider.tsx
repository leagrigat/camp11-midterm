import React, { createContext, useEffect, useState } from 'react';
import { genresLibrary } from './GenreLibrary';

type Props = {
  children: React.ReactNode;
};

// type GenreType = {
//   genre: string;
//   emoji: string;
//   id: number;
//   isSelected: boolean;
// };

type ContextType = {
  genres: typeof genresLibrary; //type wird autogeneriert
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
  const [selectedCount, SetSelectedCount] = useState(0);

  //everytime the component mouns we wanna render the count und update it! = evertime we click genre component
  useEffect(() => {
    const count = genres.filter(genre => genre.isSelected).length;
    SetSelectedCount(count);
  }, [genres]); //run once genres are rendert

  function updateGenre(genreId: number) {
    // Finde die geklickte id zb: 3 im genresArray
    // verändere in diesem object die isSelected Key value zum gegenteil

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

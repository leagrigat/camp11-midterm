import React, { createContext, useState } from 'react';
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
};

export const GenreContext = createContext<ContextType>({
  genres: [],
  updateGenre: () => {},
});

function GenreProvider({ children }: Props) {
  const [genres, setGenres] = useState(genresLibrary);

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
    console.log(genreId);
  }

  return (
    <>
      <GenreContext.Provider value={{ genres, updateGenre }}>
        {children}
      </GenreContext.Provider>
    </>
  );
}

export default GenreProvider;

import React, { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';

function GenresPage() {
  const { genres, updateGenre } = useContext(GenreContext);
  console.log(genres);
  return (
    <div>
      {genres.map(g => (
        <GenreButton
          onClick={() => {
            updateGenre(g.id);
          }}
          genreIcon={g.emoji}
          active={g.isSelected}
          genre={g.genre}
        />
      ))}
    </div>
  );
}

export default GenresPage;

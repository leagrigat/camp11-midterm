import React, { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';
import Button from '../components/Button';

function GenresPage() {
  const { genres, updateGenre } = useContext(GenreContext);
  console.log(genres);
  return (
    <div className="flex flex-wrap gap-[37px] mx-5">
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
      <Button>Confirm selected Genres</Button>
    </div>
  );
}

export default GenresPage;

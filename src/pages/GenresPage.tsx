import React, { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';
import Button from '../components/Button';
import Header from '../components/Header';
import { useNavigate } from 'react-router';

function GenresPage() {
  const { genres, updateGenre } = useContext(GenreContext);
  const navigate = useNavigate();

  console.log(genres);
  return (
    <div>
      <Header header="Genres"></Header>
      <div className="flex flex-wrap gap-[37px] mx-5 py-[16px] justify-center">
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
        <Button onClick={() => navigate('/home')}>
          Confirm selected Genres
        </Button>
      </div>
    </div>
  );
}

export default GenresPage;

import React, { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';
import Button from '../components/Button';
import Header from '../components/Header';
import { useNavigate } from 'react-router';

function GenresPage() {
  const { genres, updateGenre, selectedCount } = useContext(GenreContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-[37px] mx-5">
      {genres.map(g => (
        <GenreButton
          onClick={() => {
            updateGenre(g.id);
          }}
          key={g.id}
          genreIcon={g.emoji}
          active={g.isSelected}
          genre={g.genre}
        />
      ))}
      <div className="flex font-semibold gap-1">
        <span className="flex text-white">{selectedCount}</span>
        <p className="flex text-white-dimmed">Genres selected</p>
      </div>
      <Button onClick={() => navigate('/home')}>Confirm selected Genres</Button>
    </div>
  );
}

export default GenresPage;

import { useContext } from 'react';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';
import Button from '../components/Button';
import Header from '../components/Header';
import { useNavigate } from 'react-router';

function GenresPage() {
  const { genres, updateGenre, selectedCount } = useContext(GenreContext);

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Header header="Genres"></Header>
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="grid grid-cols-4 gap-9">
            {genres.map(genre => (
              <GenreButton
                onClick={() => {
                  updateGenre(genre.id);
                }}
                key={genre.id}
                genreIcon={genre.emoji}
                active={genre.isSelected}
                genre={genre.genre}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col font-semibold gap-3">
        <div className="flex gap-1">
          <span className=" text-white">{selectedCount}</span>
          <p className=" text-white-dimmed">
            {selectedCount === 1
              ? ' Genre selected' || selectedCount > 1
              : ' Genres selected'}
          </p>
        </div>
        <Button size="lg" onClick={() => navigate('/home')}>
          Confirm selected Genres
        </Button>
      </div>
    </div>
  );
}

export default GenresPage;

import { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';

type GenreType = {
  genre: string;
  emoji: string;
  id: number;
  isSelected: boolean;
};

function GenreComponent() {
  let counter = 0;
  function generateButton(genre: GenreType) {
    return (
      <GenreButton
        onClick={() => {
          updateGenre(genre.id);
        }}
        key={genre.id}
        genreIcon={genre.emoji}
        active={genre.isSelected}
        genre={genre.genre}
      />
    );
  }

  function mapGenres(genre: GenreType) {
    if (counter < 4) {
      if (counter < 4 - selectedCount || genre.isSelected) {
        if (
          !genre.isSelected ||
          (genre.isSelected && counter >= 4 - selectedCount)
        ) {
          counter++;
        }
        return generateButton(genre);
      }
    }
  }
  const navigate = useNavigate();
  const { genres, updateGenre, selectedCount } = useContext(GenreContext);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center font-semibold text-base text-white justify-between">
        <h2>Genres</h2>
        <IoIosArrowForward onClick={handleClick} />
      </div>
      <div className="flex flex-wrap gap-[37px] justify-center">
        {genres.map(genre => mapGenres(genre))}
      </div>
    </>
  );
}

export default GenreComponent;

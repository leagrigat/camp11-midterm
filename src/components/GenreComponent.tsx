import { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { GenreContext } from '../context/GenreProvider';
import GenreButton from '../components/GenreButton';

function GenreComponent() {
  const { genres, updateGenre } = useContext(GenreContext);

  // filter through genres and return selected and !selected genres
  const selectedGenres = genres.filter(genre => genre.isSelected);
  const notSelectedGenres = genres.filter(genre => !genre.isSelected);
  // sort the genres in the order selectedGenres and notSelectedGenres - selectedGenres are always in the first positions
  const sortedGenres = [...selectedGenres, ...notSelectedGenres];
  // slicing to take out the first 4 of our sortedGenres
  const sortedAndSlicedGenres = sortedGenres.slice(0, 4);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/genres');
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center font-semibold text-base text-white justify-between opacity-[.44]">
        <h2>Genre</h2>
        <button
          className="flex items-center gap-x-3 text-primary font-medium text-xs"
          onClick={handleClick}
        >
          <span>See All</span>
          {<IoIosArrowForward />}
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {sortedAndSlicedGenres.map(genre => (
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
  );
}

export default GenreComponent;

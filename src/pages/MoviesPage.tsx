import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';
import MovieImage from '../components/MovieImage';
import PaginationIcon from '../components/PaginationIcon';

function MoviesPage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  useEffect(() => {
    getNowPlayingMovie()
      .then(movies => {
        setMovieData(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <div className="grid grid-rows-2 grid-cols-2 gap-5">
        {movieData
          .slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
          .map(movie => (
            <MovieImage
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
              isRounded={false}
            />
          ))}
      </div>

      <div className="flex flex-wrap justify-between mb-[40px]">
        {Array.from(
          { length: Math.ceil(movieData.length / moviesPerPage) },
          (_, i) => (
            <PaginationIcon
              key={i + 1}
              page={i + 1}
              variant={currentPage === i + 1 ? 'selected' : 'unselected'}
              onClick={() => handlePageChange(i + 1)}
              className="text-center text-dark-light rounded-[2px] w-[32px] h-[32px] cursor-pointer"
            >
              {i + 1}
            </PaginationIcon>
          )
        )}
      </div>
    </div>
  );
}

export default MoviesPage;

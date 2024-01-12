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
    <div className="px-5 py-8 h-full">
      <div className="flex flex-wrap justify-center gap-[21px]">
        {movieData
          .slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
          .map(movie => (
            <MovieImage
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
              className="flex-[0_0_30vw] [&>img]:rounded-lg"
            />
          ))}
      </div>

      <div className="flex justify-between items-end">
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

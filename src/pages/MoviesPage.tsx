import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import MovieImage from '../components/MovieImage';
import PaginationIcon from '../components/PaginationIcon';
import { useGetMovies } from '../hooks/useGetMovies';

function MoviesPage() {
  const { movies, isLoading, error, isError } = useGetMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {isLoading ? (
        <div className="h-screen top-0 flex flex-col justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-rows-2 grid-cols-2 gap-5">
            {movies!
              .slice(
                (currentPage - 1) * moviesPerPage,
                currentPage * moviesPerPage
              )
              .map(movie => (
                <MovieImage
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
                  isRounded={false}
                />
              ))}
          </div>

          <div className="flex flex-wrap justify-between sticky bottom-[80px]">
            {Array.from(
              { length: Math.ceil(movies!.length / moviesPerPage) },
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
        </>
      )}
    </div>
  );
}

export default MoviesPage;

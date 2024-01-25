import { Movie } from '../api/movies';
import MovieImage from '../components/MovieImage';
import { useGetMoviesById } from '../hooks/useGetMoviesById';
import LoadingSpinner from '../components/LoadingSpinner';

function BookmarkedMoviesPage() {
  const { movies, isLoading } = useGetMoviesById();
  function getMovieImage(movie: Movie) {
    return (
      <MovieImage
        key={movie.id}
        movieId={movie.id}
        posterPath={movie.poster_path}
        isRounded={false}
      />
    );
  }

  return (
    <div className="h-full flex flex-col justify-center">
      {isLoading ? (
        <div className="h-screen top-0 flex flex-col justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div
            id="movieContainer"
            className="flex flex-col flex-wrap min-h-[275px] max-h-[800px] gap-5 overflow-x-scroll justify-top mb-8"
          >
            {movies!.map((movie, index) => (
              <div key={movie.id}>{getMovieImage(movie)}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BookmarkedMoviesPage;

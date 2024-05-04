import { Movie } from '../api/movies';
import LoadingSpinner from '../components/LoadingSpinner';
import MovieImage from '../components/MovieImage';
import { useGetMoviesByGenre } from '../hooks/useGetMoviesByGenre';
import { InView } from 'react-intersection-observer';

function MoviesPage() {
  const { movies, isLoading, fetchNextPage, hasNextPage } =
    useGetMoviesByGenre();

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
            className="flex flex-col flex-wrap min-h-[275px] max-h-[800px] gap-5 overflow-x-scroll justify-center mb-8"
          >
            {movies?.pages.map(moviePage =>
              moviePage.results!.map((movie, index) => {
                if (index === 9 && hasNextPage) {
                  return (
                    <InView
                      key={movie.id}
                      onChange={(inView, entry) => {
                        inView ? fetchNextPage() : null;
                      }}
                      triggerOnce
                    >
                      {getMovieImage(movie)}
                    </InView>
                  );
                } else {
                  return <div key={movie.id}>{getMovieImage(movie)}</div>;
                }
              })
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesPage;

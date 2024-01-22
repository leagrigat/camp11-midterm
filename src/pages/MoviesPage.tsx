import LoadingSpinner from '../components/LoadingSpinner';
import MovieImage from '../components/MovieImage';
import { useGetMoviesByGenre } from '../hooks/useGetMoviesByGenre';

function MoviesPage() {
  const {
    movies,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isError,
  } = useGetMoviesByGenre();

  return (
    <div className="h-full flex flex-col justify-between">
      {isLoading ? (
        <div className="h-screen top-0 flex flex-col justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div
            id="movieContainer"
            className="flex flex-col flex-wrap h-[700px] gap-5 overflow-x-scroll"
          >
            {movies?.pages.map(moviePage =>
              moviePage.results!.map(movie => (
                <div>
                  <MovieImage
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                    isRounded={false}
                  />
                </div>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-between sticky bottom-[80px]">
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesPage;

import SingleMoviePage from '../pages/SingleMoviePage';
import NotFoundPage from '../pages/NotFoundPage';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import LoadingSpinner from './LoadingSpinner';

function MovieDataWrapper() {
  // fetch movie data
  const { movie, isLoading } = useGetSingleMovie();
  return (
    <div>
      {isLoading ? (
        <div className="h-screen top-0 flex flex-col justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : !movie || !movie.title ? (
        <NotFoundPage />
      ) : (
        <SingleMoviePage />
      )}
    </div>
  );
}

export default MovieDataWrapper;

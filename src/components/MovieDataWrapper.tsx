import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import SingleMoviePage from '../pages/SingleMoviePage';
import NotFoundPage from '../pages/NotFoundPage';
import LoadingSpinner from './LoadingSpinner';

function MovieDataWrapper() {
  const { movie, isLoading } = useGetSingleMovie();

  if (isLoading)
    return (
      <div className="h-screen top-0 flex flex-col justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  if (!movie || !movie.title) {
    return <NotFoundPage />;
  }

  return <SingleMoviePage />;
}

export default MovieDataWrapper;

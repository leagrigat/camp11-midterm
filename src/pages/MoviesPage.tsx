import MovieImage from '../components/MovieImage';
import { useGetMovies } from '../hooks/useGetMovies';
import { Oval } from 'react-loader-spinner';

function MoviesPage() {
  const { movies, isLoading, error, isError } = useGetMovies();

  return (
    <div>
      {isLoading ? (
        <div className="h-screen top-0 flex flex-col justify-center items-center">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#FFB43A"
            secondaryColor="#363740"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-rows-2 grid-cols-2 gap-5">
          {movies!.slice(0, 4).map(movie => (
            <MovieImage
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      )}
      <div></div>
    </div>
  );
}

export default MoviesPage;
